// --- Footer igual ao diretorio.js ---
document.querySelector('#ano').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent = document.lastModified;

// --- Menu igual ao seu ---
const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('nav');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// --- CLIMA ---
const tempAtual = document.querySelector('#temp-atual');
const descClima = document.querySelector('#desc-clima');
const iconeClima = document.querySelector('#icone-do-clima');
const captionClima = document.querySelector('#caption-clima');
const previsaoLista = document.querySelector('#previsao-3-dias');

// São Paulo: lat -23.55 lon -46.63
const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.55&lon=-46.63&units=metric&lang=pt_br&appid=SUA_CHAVE_AQUI';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-23.55&lon=-46.63&units=metric&lang=pt_br&appid=SUA_CHAVE_AQUI';

async function apiFetch() {
    try {
        const resAtual = await fetch(currentUrl);
        if (resAtual.ok) {
            const dados = await resAtual.json();
            tempAtual.innerHTML = `${dados.main.temp.toFixed(0)}&deg;C`;
            descClima.textContent = dados.weather[0].description;
            const icone = dados.weather[0].icon;
            iconeClima.setAttribute('src', `https://openweathermap.org/img/wn/${icone}@2x.png`);
            iconeClima.setAttribute('alt', dados.weather[0].description);
            captionClima.textContent = dados.weather[0].description;
        }
        const resPrev = await fetch(forecastUrl);
        if (resPrev.ok) {
            const dadosPrev = await resPrev.json();
            const dias = dadosPrev.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
            previsaoLista.innerHTML = '';
            dias.forEach(dia => {
                const data = new Date(dia.dt_txt);
                const diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'short' });
                const li = document.createElement('li');
                li.innerHTML = `<strong>${diaSemana}:</strong> ${dia.main.temp.toFixed(0)}&deg;C - ${dia.weather[0].description}`;
                previsaoLista.appendChild(li);
            });
        }
    } catch (e) { console.log(e); }
}
apiFetch();

// --- DESTAQUES ---
const container = document.querySelector('#spotlight-container');

async function getSpotlights() {
    try {
        const response = await fetch('dados/membros.json');
        const data = await response.json();
        const membros = data.membros || data.members || data;
        // Ajusta aqui conforme seu JSON: 3 = Ouro, 2 = Prata
        const elegiveis = membros.filter(m => m.nivel === 3 || m.nivel === 2 || m.membership === 3 || m.membership === 2 || m.level === 'Gold' || m.level === 'Silver' || m.nivel === 'Ouro' || m.nivel === 'Prata');
        const embaralhados = elegiveis.sort(() => 0.5 - Math.random());
        const destaques = embaralhados.slice(0, 3);
        container.innerHTML = '';
        destaques.forEach(m => {
            const card = document.createElement('article');
            card.classList.add('spotlight-card');
            const nome = m.nome || m.name;
            const telefone = m.telefone || m.phone;
            const endereco = m.endereco || m.address;
            const site = m.site || m.website;
            const imagem = m.imagem || m.image;
            const nivel = m.nivel || m.membership || m.level;
            card.innerHTML = `
        <h3>${nome}</h3>
        <img src="imagens/${imagem}" alt="Logo ${nome}" width="150" height="100" loading="lazy">
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><a href="${site}" target="_blank">Visitar site</a></p>
        <p><strong>Nível:</strong> ${nivel}</p>
      `;
            container.appendChild(card);
        });
    } catch (e) { console.log(e); }
}
getSpotlights();