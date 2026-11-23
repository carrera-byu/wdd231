// DIRETORIO DE MEMBROS - carrega empresas do JSON
const container = document.getElementById("membros");

function getNivel(n) {
  if (n === 3) return "Ouro";
  if (n === 2) return "Prata";
  if (n === 1) return "Bronze";
  return "Membro";
}

async function carregarMembros() {
  if (!container) return;
  try {
    const resposta = await fetch("dados/membros.json");
    const dados = await resposta.json();
    const membros = dados.membros || [];

    container.innerHTML = membros.map(m => `
            <article class="card member-card">
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
  } catch (error) {
    console.error("Erro ao carregar membros:", error);
    container.innerHTML = "<p>Não foi possível carregar os membros. Verifique o arquivo dados/membros.json</p>";
  }
}

carregarMembros();

// GRADE / LISTA
const btnGrade = document.getElementById("grade");
const btnLista = document.getElementById("lista");

if (btnGrade && btnLista && container) {
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
}

// FOOTER - IDs de esta página: ano / ultimaModificacao
document.getElementById("ano").textContent = "© " + new Date().getFullYear() + " Câmara de Comércio de São Paulo";
document.getElementById("ultimaModificacao").textContent = "Última modificação: " + document.lastModified;