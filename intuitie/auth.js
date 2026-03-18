// auth.js — Supabase client, magic link, session + access management

const SUPABASE_URL = 'https://wpwcikenckjstmrdhoyx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indwd2Npa2VuY2tqc3RtcmRob3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NjM2MTMsImV4cCI6MjA4OTQzOTYxM30.Lzfj2RDqjp20t614DVOJu81oLi5YSKpJtqQb2pze5Gk';

// Initialize Supabase client — shared across auth.js, db.js, app.js via window.sb
const { createClient } = supabase;
window.sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Get current session. Returns session object or null.
 */
async function getSession() {
  const { data: { session } } = await window.sb.auth.getSession();
  return session;
}

/**
 * Send magic link to email. Returns { error } or {}.
 */
async function sendMagicLink(email) {
  const redirectTo = window.location.origin + window.location.pathname;
  const { error } = await window.sb.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: redirectTo
    }
  });
  return { error };
}

/**
 * Check if current user has paid access for 'intuitie'.
 * Returns true if access_grants row exists and revoked_at is null.
 */
async function checkAccess(user) {
  const { data, error } = await window.sb.from('access_grants')
    .select('id')
    .eq('email', user.email)
    .eq('product', 'intuitie')
    .is('revoked_at', null)
    .maybeSingle();
  if (error) { console.error('Access check error:', error); return false; }
  return !!data;
}

/**
 * Sign out the current user.
 */
async function signOut() {
  await window.sb.auth.signOut();
}

/**
 * Handle magic link redirect: exchange token hash for session.
 * Called once on page load if URL contains auth tokens.
 */
async function handleAuthRedirect() {
  // Supabase JS v2 handles the PKCE exchange automatically on getSession().
  // This function is a hook for any post-auth redirect cleanup if needed.
  const hash = window.location.hash;
  if (hash && hash.includes('access_token')) {
    // Session will be picked up by getSession() — clean up URL
    history.replaceState(null, '', window.location.pathname);
  }
}
