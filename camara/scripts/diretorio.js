function getNivel(n) {
    if (n === 3) return "Ouro";
    if (n === 2) return "Prata";
    return "Membro";
}

const container = document.getElementById("membros");

async function carregarMembros() {
    const resposta = await fetch("dados/membros.json");
    const membros = await resposta.json();
    container.innerHTML = membros.map(m => `
    <article class="card">
      <img src="${m.imagem}" alt="Logo ${m.nome}" loading="lazy">
      <div>
        <h3>${m.nome}</h3>
        <p><span class="nivel">Nivel:</span> ${getNivel(m.nivel)}</p>
        <p>${m.descricao}</p>
        <p>${m.endereco}</p>
        <p>${m.telefone}</p>
        <p><a href="${m.website}" target="_blank">Visitar Site</a></p>
      </div>
    </article>
  `).join("");
}
carregarMembros();

const btnGrade = document.getElementById("btnGrade");
const btnLista = document.getElementById("btnLista");
btnGrade.addEventListener("click", () => {
    container.classList.remove("lista");
    btnGrade.classList.add("ativo");
    btnLista.classList.remove("ativo");
});
btnLista.addEventListener("click", () => {
    container.classList.add("lista");
    btnLista.classList.add("ativo");
    btnGrade.classList.remove("ativo");
});
document.getElementById("ano").textContent = "© " + new Date().getFullYear() + " Camara de Comercio de Sao Paulo";