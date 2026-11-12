export function definirTitulo(curso) {
    const titulo = document.querySelector("#nomeCurso");
    titulo.textContent = `${curso.code} - ${curso.name}`;
}

export function renderizarSecoes(secoes) {
    const tabela = document.querySelector("#secoes");
    tabela.innerHTML = "";
    secoes.forEach((secao) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${secao.sectionNum}</td><td>${secao.roomNum}</td><td>${secao.enrolled}</td><td>${secao.days}</td><td>${secao.instructor}</td>`;
        tabela.append(tr);
    });
}