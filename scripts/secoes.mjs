export function definirSecaoSelecionada(secoes) {
    const select = document.querySelector("#numeroSecao");
    secoes.forEach((secao) => {
        const option = document.createElement("option");
        option.value = secao.sectionNum;
        option.textContent = secao.sectionNum;
        select.append(option);
    });
}