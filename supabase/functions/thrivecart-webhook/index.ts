import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

Deno.serve(async (req) => {
  if (req.method === 'GET' || req.method === 'HEAD') {
    return new Response('OK', { status: 200 });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Parse multipart form data from ThriveCart
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return new Response('Invalid form data', { status: 400 });
  }

  const event = formData.get('event') as string;

  // Only process successful orders
  if (event !== 'order.success') {
    return new Response('OK', { status: 200 });
  }

  // Verify webhook secret
  const secret = formData.get('thrivecart_secret') as string;
  const expectedSecret = Deno.env.get('THRIVECART_SECRET');
  if (secret !== expectedSecret) {
    console.error('Webhook secret mismatch');
    return new Response('OK', { status: 200 }); // 200 to prevent ThriveCart retries
  }

  // Extract order data
  const email = formData.get('customer[email]') as string;
  const orderId = formData.get('order_id') as string;
  const product = formData.get('base_product') as string | null;

  if (!email) {
    console.error('No customer email in payload');
    return new Response('OK', { status: 200 });
  }

  // Write to access_grants using service role (bypasses RLS)
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  const { error } = await supabase.from('access_grants').upsert({
    email,
    product: 'intuitie',
    order_id: orderId ?? null,
  }, { onConflict: 'email' });

  if (error) {
    console.error('Failed to write access_grants:', error);
    return new Response('Internal error', { status: 500 });
  }

  console.log('Access granted for:', email, '| order:', orderId);
  return new Response('OK', { status: 200 });
});
