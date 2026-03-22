import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseAdmin = () => createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const APP_URL = 'https://richvieren.github.io/intuitie/';

// Grant access to a customer email
async function grantAccess(email: string, orderId: string | null) {
  const supabase = supabaseAdmin();
  const { error } = await supabase.from('access_grants').upsert({
    email,
    product: 'intuitie',
    order_id: orderId ?? null,
  }, { onConflict: 'email' });
  if (error) throw error;
}

// Generate a Supabase magic link and return the action URL
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
  const url = new URL(req.url);

  // ── GET: ThriveCart success page redirect ──────────────────────────────────
  // ThriveCart appends customer data as query params to the success URL.
  // We grant access, generate a magic link, and redirect the buyer instantly.
  if (req.method === 'GET' || req.method === 'HEAD') {
    const email = url.searchParams.get('thrivecart[customer][email]');

    // No email = ThriveCart pinging the URL to verify it's reachable
    if (!email) {
      return new Response('OK', { status: 200 });
    }

    const orderId = url.searchParams.get('thrivecart[order_id]');

    try {
      await grantAccess(email, orderId);
      const magicLink = await generateMagicLink(email);
      return Response.redirect(magicLink, 302);
    } catch (err) {
      console.error('Success redirect error:', err);
      // Fallback: send to app, buyer can request magic link manually
      return Response.redirect(APP_URL, 302);
    }
  }

  // ── POST: ThriveCart webhook (backup / order events) ──────────────────────
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

  const email = formData.get('customer[email]') as string;
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
