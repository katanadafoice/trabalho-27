const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
navLinks.classList.toggle('active');
});


function mudarTexto() {
    document.getElementById('titulo').innerText = 'trabalhamos com velocidade e qualidade';
    }