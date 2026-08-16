// ============================================================
// Conexão com o Supabase (banco de dados + login)
// A chave "anon" abaixo é segura para ficar exposta no navegador —
// a proteção real dos dados vem das políticas de RLS configuradas
// no banco (só usuários logados podem ler/escrever).
// ============================================================

const SUPABASE_URL = 'https://ipdpzfuikfqsxbmeqrwb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwZHB6ZnVpa2Zxc3hibWVxcndiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4ODE2MTMsImV4cCI6MjEwMjQ1NzYxM30.0uug6vVmti2RUuogR-PKU5Y5T4hNgDOQWh_KdBbSNqc';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
