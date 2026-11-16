const menuBtn = document.getElementById('menu');
const nav = document.getElementById('navegacao');
const yearSpan = document.getElementById('currentyear');
const lastMod = document.getElementById('lastModified');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuBtn.classList.toggle('open');
        menuBtn.textContent = menuBtn.classList.contains('open') ? '✕' : '☰';
    });
}
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastMod) lastMod.textContent = `Última modificação: ${document.lastModified}`;