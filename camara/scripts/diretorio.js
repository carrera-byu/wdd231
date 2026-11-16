const membersContainer = document.getElementById('members');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');

async function getMembers() {
  try {
    const response = await fetch('dados/membros.json');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Erro ao carregar membros:', error);
    membersContainer.innerHTML = '<p>Não foi possível carregar os membros.</p>';
  }
}


function displayMembers(members) {
  membersContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');
    let levelText = 'Membro';
    if (member.membership === 3) levelText = 'Ouro';
    if (member.membership === 2) levelText = 'Prata';
    if (member.membership === 1) levelText = 'Bronze';

    card.innerHTML = `
      <img src="imagens/${member.image}" alt="Logo ${member.name}" width="200" height="120" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visitar site</a>
      <p class="level">Nível: ${levelText}</p>
    `;
    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
});

getMembers();