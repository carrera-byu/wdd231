const cursos = [
    { subject: 'CSE', number: 110, title: 'Intro Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming Functions', credits: 2, completed: false },
    { subject: 'CSE', number: 210, title: 'Programming Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Dev', credits: 2, completed: false }
];
function mostrar(lista) {
    const cont = document.querySelector('#cursos');
    cont.innerHTML = '';
    lista.forEach(c => {
        const d = document.createElement('div');
        d.className = c.completed ? 'curso completo' : 'curso';
        d.textContent = `${c.subject} ${c.number}`;
        cont.appendChild(d);
    });
    document.querySelector('#creditos').textContent = lista.reduce((a, c) => a + c.credits, 0);
}
mostrar(cursos);
document.querySelector('#todos').addEventListener('click', () => mostrar(cursos));
document.querySelector('#wdd').addEventListener('click', () => mostrar(cursos.filter(c => c.subject === 'WDD')));
document.querySelector('#cse').addEventListener('click', () => mostrar(cursos.filter(c => c.subject === 'CSE')));