// JavaScript
const jumbotron = document.getElementById('jumbotron');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const newPosition = 50 - scrollY * 0.2; // Ajusta la velocidad de movimiento
    jumbotron.style.top = `${newPosition}%`;
});

