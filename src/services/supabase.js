/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gxdzflktgpvjjtvtkhse.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4ZHpmbGt0Z3B2amp0dnRraHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzQ4ODQsImV4cCI6MjAxNDYxMDg4NH0.Y8ZRMgxXk-3OvBzYJorBN_kwXX9wYp9lQxrMVmTAHGI";
export const supabase = createClient(supabaseUrl, supabaseKey);
