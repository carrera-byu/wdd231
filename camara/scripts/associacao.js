// Timestamp - cuando carga el formulario
const timestamp = document.getElementById('timestamp');
if (timestamp) {
    timestamp.value = new Date().toLocaleString('pt-BR');
}

// Modales
document.querySelectorAll('[data-modal]').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById(button.dataset.modal).showModal();
    });
});

document.querySelectorAll('dialog .close').forEach(button => {
    button.addEventListener('click', () => button.closest('dialog').close());
});

document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
    });
});