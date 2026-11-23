const apiKey = "8af4d34955c6514a799a0c9c8cdf3961"; // Pon tu llave que ya funciona, no la cambies
const cidade = "São Paulo";

// 1. CLIMA ATUAL + PREVISÃO
async function carregarClima() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},BR&units=metric&lang=pt_br&appid=${apiKey}`;
        const resp = await fetch(url);
        const dados = await resp.json();
        document.getElementById("clima-atual").textContent = `${Math.round(dados.main.temp)}°C - ${dados.weather[0].description}`;

        const urlPrev = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},BR&units=metric&lang=pt_br&appid=${apiKey}`;
        const resp2 = await fetch(urlPrev);
        const dados2 = await resp2.json();
        let html = "";
        for (let i = 8; i <= 24; i += 8) {
            const dia = dados2.list[i];
            const data = new Date(dia.dt * 1000);
            html += `<p>${data.toLocaleDateString("pt-BR", { weekday: "long" })}: ${Math.round(dia.main.temp)}°C</p>`;
        }
        document.getElementById("previsao").innerHTML = html;
    } catch (e) {
        document.getElementById("clima-atual").textContent = "Clima indisponível";
    }
}

// 2. DESTAQUES - Ahora sí con tu JSON
async function carregarDestaques() {
    try {
        const resp = await fetch("dados/membros.json");
        const dados = await resp.json();
        const membros = dados.members; // <- Aquí estaba el error, era "members"

        // Filtra solo Ouro (3) y Prata (2)
        const filtrados = membros.filter(m => m.membership === 3 || m.membership === 2);

        // Elige 3 al azar
        const escolhidos = filtrados.sort(() => 0.5 - Math.random()).slice(0, 3);

        let html = "";
        escolhidos.forEach(m => {
            const nivelTexto = m.membership === 3 ? "Ouro" : "Prata";
            html += `
        <div class="spotlight-card">
          <h3>${m.name}</h3>
          <p><strong>Nível:</strong> ${nivelTexto}</p>
          <p>${m.address}</p>
          <p>${m.phone}</p>
          <a href="${m.website}" target="_blank">Visitar site</a>
        </div>`;
        });
        document.getElementById("destaques").innerHTML = html;
    } catch (e) {
        document.getElementById("destaques").innerHTML = "<p>Erro ao carregar destaques</p>";
    }
}

carregarClima();
carregarDestaques();