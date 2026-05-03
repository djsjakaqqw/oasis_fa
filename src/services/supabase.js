import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kpwgbfethfsioczxrjjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwd2diZmV0aGZzaW9jenhyampnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzMDY4NjUsImV4cCI6MjAyMDg4Mjg2NX0.cr7beQhbevq2I2sf-zkWp4oEsCJ-wqjvewf1_dSjnEI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
