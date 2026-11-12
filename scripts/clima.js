const tempAtual = document.querySelector("#temp-atual");
const iconeClima = document.querySelector("#icone-do-clima");
const legenda = document.querySelector("figcaption");

// Trier, Alemanha: 49.75, 6.64
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=SUA_CHAVE_AQUI';
async function apiFetch() {
    try {
        const resposta = await fetch(url);
        if (resposta.ok) {
            const dados = await resposta.json();
            console.log(dados);
            mostrarResultados(dados);
        } else {
            throw Error(await resposta.text());
        }
    } catch (erro) {
        console.log(erro);
    }
}

function mostrarResultados(dados) {
    tempAtual.innerHTML = `${dados.main.temp}&deg;C`;
    const icone = `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`;
    const descricao = dados.weather[0].description;

    iconeClima.setAttribute('src', icone);
    iconeClima.setAttribute('alt', descricao);
    legenda.textContent = descricao;
}

apiFetch();