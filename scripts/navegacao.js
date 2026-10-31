const botao = document.querySelector('#botao-de-nav');
const nav = document.querySelector('#barra-navegacao');
botao.addEventListener('click', () => {
    botao.classList.toggle('exibir');
    nav.classList.toggle('exibir');
});