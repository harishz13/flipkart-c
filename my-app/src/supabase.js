import { createClient} from "@supabase/supabase-js";

const supabase = createClient("https://dzwsqhdpngwpknszghol.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6d3NxaGRwbmd3cGtuc3pnaG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0MDIyNDgsImV4cCI6MTk5OTk3ODI0OH0.48lJVIiP5O4eQoPqrrPHgBgp6sES1MjPb3ZY1kCCcTI")

export default supabase;