import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xzjdttrcyyukyievhpmm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6amR0dHJjeXl1a3lpZXZocG1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MDEwMzksImV4cCI6MjA1NDk3NzAzOX0.3df_qIzC7vhFlmK7k04EBaGGiZCd8895y5-lYI9VGsM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
