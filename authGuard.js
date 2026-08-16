// ============================================================
// Protege páginas internas: se não estiver logado, volta para o login.
// ============================================================
(async () => {
  const { data } = await supabaseClient.auth.getSession();
  if (!data.session) {
    window.location.href = 'index.html';
  }
})();

async function fazerLogout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}
