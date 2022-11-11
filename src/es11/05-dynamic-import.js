const button = document.getElementById('btn');

button.addEventListener('click', async function() {
    const modulo = await import('./modulo.js');
    modulo.hello();
})