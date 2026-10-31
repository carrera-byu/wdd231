const cont = document.getElementById('cursos');
const cred = document.getElementById('creditos');
function mostrar(lista) {
    cont.innerHTML = '';
    lista.forEach(c => {
        const div = document.createElement('div');
        div.className = `curso ${c.completed ? 'completo' : 'incompleto'}`;
        div.textContent = `${c.subject} ${c.number}`;
        cont.appendChild(div);
    });
    const total = lista.reduce((s, c) => s + c.credits, 0);
    cred.textContent = `Total de Créditos: ${total}`;
}
mostrar(cursos);
document.getElementById('todos').addEventListener('click', () => mostrar(cursos));
document.getElementById('wdd').addEventListener('click', () => mostrar(cursos.filter(c => c.subject === 'WDD')));
document.getElementById('cse').addEventListener('click', () => mostrar(cursos.filter(c => c.subject === 'CSE')));