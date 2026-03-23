import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseAdmin = () => createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const APP_URL = 'https://richvieren.github.io/intuitie/';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://richvieren.github.io',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

async function grantAccess(email: string, orderId: string | null) {
  const supabase = supabaseAdmin();
  const { error } = await supabase.from('access_grants').upsert({
    email: email.toLowerCase(),
    product: 'intuitie',
    order_id: orderId ?? null,
  }, { onConflict: 'email' });
  if (error) throw error;
}

async function generateMagicLink(email: string): Promise<string> {
  const supabase = supabaseAdmin();
  const { data, error } = await supabase.auth.admin.generateLink({
    type: 'magiclink',
    email,
    options: { redirectTo: APP_URL }
  });
  if (error) throw error;
  return data.properties.action_link;
}

Deno.serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const url = new URL(req.url);

  // ── GET: handles both ThriveCart redirect and app-initiated fetch ──────────
  if (req.method === 'GET' || req.method === 'HEAD') {
    const email = url.searchParams.get('thrivecart[customer][email]')?.toLowerCase() ?? null;

    // No email = ThriveCart pinging the URL to verify reachability
    if (!email) {
      return new Response('OK', { status: 200 });
    }

    const orderId = url.searchParams.get('thrivecart[order_id]');
    const wantsJson = url.searchParams.get('format') === 'json';

    try {
      await grantAccess(email, orderId);
      const magicLink = await generateMagicLink(email);

      // App fetches this endpoint and expects JSON back
      if (wantsJson) {
        return new Response(JSON.stringify({ url: magicLink }), {
          status: 200,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
        });
      }

      // ThriveCart uses EF as success URL — redirect directly
      return Response.redirect(magicLink, 302);
    } catch (err) {
      console.error('Success redirect error:', err);
      if (wantsJson) {
        return new Response(JSON.stringify({ error: 'Failed to generate login link' }), {
          status: 500,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' }
        });
      }
      return Response.redirect(APP_URL, 302);
    }
  }

  // ── POST: ThriveCart webhook (backup for order events) ────────────────────
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return new Response('Invalid form data', { status: 400 });
  }

  const event = formData.get('event') as string;
  if (event !== 'order.success') {
    return new Response('OK', { status: 200 });
  }

  const secret = formData.get('thrivecart_secret') as string;
  const expectedSecret = Deno.env.get('THRIVECART_SECRET');
  if (secret !== expectedSecret) {
    console.error('Webhook secret mismatch');
    return new Response('OK', { status: 200 });
  }

  const email = (formData.get('customer[email]') as string)?.toLowerCase();
  const orderId = formData.get('order_id') as string;

  if (!email) {
    console.error('No customer email in payload');
    return new Response('OK', { status: 200 });
  }

  try {
    await grantAccess(email, orderId);
    console.log('Access granted for:', email, '| order:', orderId);
  } catch (err) {
    console.error('Failed to write access_grants:', err);
    return new Response('Internal error', { status: 500 });
  }

  return new Response('OK', { status: 200 });
});
