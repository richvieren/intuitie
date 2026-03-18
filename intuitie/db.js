// db.js — Supabase data layer. Replaces localStorage for progress persistence.
// Depends on window.sb initialized in auth.js (load auth.js first).

/**
 * Load progress state from Supabase for current user.
 * Returns state object, or null if none found.
 */
async function loadProgress(userId) {
  const { data, error } = await window.sb.from('progress')
    .select('state')
    .eq('user_id', userId)
    .eq('product', 'intuitie')
    .maybeSingle();

  if (error) { console.error('loadProgress error:', error); return null; }
  return data ? data.state : null;
}

/**
 * Save (upsert) progress state to Supabase.
 * Fire-and-forget — call without await for inline event handlers.
 */
async function saveProgress(userId, stateObj) {
  const { error } = await window.sb.from('progress')
    .upsert({
      user_id: userId,
      product: 'intuitie',
      state: stateObj,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,product' });

  if (error) console.error('saveProgress error:', error);
}

/**
 * Upsert profiles row on first login and on session restore.
 */
async function upsertProfile(session) {
  const { error } = await window.sb.from('profiles')
    .upsert({
      user_id: session.user.id,
      email: session.user.email
    }, { onConflict: 'user_id' });

  if (error) console.error('upsertProfile error:', error);
}
