const params = new URLSearchParams(window.location.search);
const results = document.getElementById('results');

const fields = [
    ['Nome', 'first-name'],
    ['Sobrenome', 'last-name'],
    ['E-mail', 'email'],
    ['Celular', 'phone'],
    ['Empresa / Organização', 'organization'],
    ['Data / Hora', 'timestamp']
];

if ([...params.keys()].length === 0) {
    results.innerHTML = '<p>Nenhum dado enviado. Por favor, preencha o <a href="associacao.html">formulário de associação</a>.</p>';
} else {
    fields.forEach(([label, key]) => {
        const value = params.get(key);
        if (value) {
            const p = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `${label}: `;
            p.appendChild(strong);
            p.append(document.createTextNode(value));
            results.appendChild(p);
        }
    });
}

const yearEl = document.getElementById('year');
const lastModEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModEl) lastModEl.textContent = `Última Modificação: ${document.lastModified}`;