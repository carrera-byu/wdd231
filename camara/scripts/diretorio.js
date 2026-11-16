// MENU HAMBURGUESA + WAYFINDING
const btnMenu = document.getElementById("menu");
const nav = document.querySelector("nav");
btnMenu.addEventListener("click", () => {
  nav.classList.toggle("aberto");
  btnMenu.textContent = nav.classList.contains("aberto") ? "✖" : "☰";
});

function getNivel(n) {
  if (n === 3) return "Ouro";
  if (n === 2) return "Prata";
  return "Membro";
}

const container = document.getElementById("membros");

async function carregarMembros() {
  const resposta = await fetch("dados/membros.json");
  const dados = await resposta.json();
  const membros = dados.membros;
  container.innerHTML = membros.map(m => `
    <article class="card">
      <img src="${m.imagem}" alt="Logo ${m.nome}" loading="lazy" width="300" height="180">
      <div>
        <h3>${m.nome}</h3>
        <p><strong>Nível:</strong> ${getNivel(m.nivel)}</p>
        <p>${m.descricao}</p>
        <p>${m.endereco}</p>
        <p>${m.telefone}</p>
        <p><a href="${m.website}" target="_blank">Visitar Site</a></p>
      </div>
    </article>
  `).join("");
}
carregarMembros();

// GRADE / LISTA - IDs IGUALES AL HTML
const btnGrade = document.getElementById("grade");
const btnLista = document.getElementById("lista");

btnGrade.addEventListener("click", () => {
  container.classList.add("grade");
  container.classList.remove("lista");
  btnGrade.classList.add("ativo");
  btnLista.classList.remove("ativo");
});
btnLista.addEventListener("click", () => {
  container.classList.add("lista");
  container.classList.remove("grade");
  btnLista.classList.add("ativo");
  btnGrade.classList.remove("ativo");
});

// FOOTER
document.getElementById("ano").textContent = "© " + new Date().getFullYear() + " Câmara de Comércio de São Paulo";
document.getElementById("ultimaModificacao").textContent = "Última modificação: " + document.lastModified;