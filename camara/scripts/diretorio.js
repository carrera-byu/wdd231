// Menu hambúrguer
const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('#navegacao');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('aberto');
});

// Rodapé - ano e última modificação
document.querySelector('#anoAtual').textContent = new Date().getFullYear();
document.querySelector('#ultimaModificacao').textContent = `Última modificação: ${document.lastModified}`;

// Buscar membros
const url = 'dados/membros.json';
const container = document.querySelector('#membros');

async function getMembros() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        exibirMembros(data);
    } catch (erro) {
        console.error('Erro ao carregar membros:', erro);
        container.innerHTML = '<p>Não foi possível carregar os membros.</p>';
    }
}

function getNivelTexto(nivel) {
    if (nivel === 3) return 'Ouro';
    if (nivel === 2) return 'Prata';
    return 'Membro';
}

function exibirMembros(membros) {
    container.innerHTML = '';
    membros.forEach((membro) => {
        const card = document.createElement('section');
        card.classList.add('cartao');
        card.innerHTML = `
      <img src="${membro.imagem}" alt="Logo ${membro.nome}" loading="lazy" width="200" height="120">
      <h3>${membro.nome}</h3>
      <p><strong>Nível:</strong> ${getNivelTexto(membro.nivel)}</p>
      <p>${membro.descricao}</p>
      <p>${membro.endereco}</p>
      <p>${membro.telefone}</p>
      <a href="${membro.website}" target="_blank">Visitar Site</a>
    `;
        container.appendChild(card);
    });
}

// Alternar Grade / Lista
const gradeBtn = document.querySelector('#gradeBtn');
const listaBtn = document.querySelector('#listaBtn');

gradeBtn.addEventListener('click', () => {
    container.classList.add('grade');
    container.classList.remove('lista');
    gradeBtn.classList.add('ativo');
    listaBtn.classList.remove('ativo');
});

listaBtn.addEventListener('click', () => {
    container.classList.add('lista');
    container.classList.remove('grade');
    listaBtn.classList.add('ativo');
    gradeBtn.classList.remove('ativo');
});

getMembros();