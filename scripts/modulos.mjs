import cursoBYUI from './curso.mjs';
import { definirSecaoSelecionada } from './secoes.mjs';
import { definirTitulo, renderizarSecoes } from './saida.mjs';

definirTitulo(cursoBYUI);
definirSecaoSelecionada(cursoBYUI.sections);
renderizarSecoes(cursoBYUI.sections);

document.querySelector("#matricularEstudante").addEventListener("click", function () {
    const numeroSecao = Number(document.querySelector("#numeroSecao").value);
    cursoBYUI.changeEnrollment(numeroSecao);
    renderizarSecoes(cursoBYUI.sections);
});

document.querySelector("#removerEstudante").addEventListener("click", function () {
    const numeroSecao = Number(document.querySelector("#numeroSecao").value);
    cursoBYUI.changeEnrollment(numeroSecao, false);
    renderizarSecoes(cursoBYUI.sections);
});