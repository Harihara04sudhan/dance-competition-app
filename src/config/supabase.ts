import { createClient } from '@supabase/supabase-js';

// Credentials come from .env (see .env.example):
// https://supabase.com/dashboard/project/_/settings/api
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

if (!process.env.EXPO_PUBLIC_SUPABASE_URL || !process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn(
    'Supabase credentials are not configured. Copy .env.example to .env and set ' +
      'EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY. ' +
      'Falling back to placeholder values; auth and data fetching will not work.'
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
