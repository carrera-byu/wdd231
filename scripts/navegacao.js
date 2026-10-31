const btn = document.getElementById('menu');
const nav = document.getElementById('animateme');
btn.addEventListener('click', () => nav.classList.toggle('exibir'));
document.getElementById('anoAtual').textContent = new Date().getFullYear();
document.getElementById('ultimaModificacao').textContent = `Última modificação: ${document.lastModified}`;