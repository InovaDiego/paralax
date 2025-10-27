document.addEventListener('DOMContentLoaded', function() {
    const backgroundLayer = document.querySelector('.parallax-background');
    const figureLayer = document.querySelector('.parallax-figure');
    const planetLayer = document.querySelector('.parallax-planet');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;

        // Cuanto más bajo el z-index (más lejos), más lento se mueve
        // Puedes ajustar estos multiplicadores para controlar la velocidad
        backgroundLayer.style.transform = 'translateY(' + (-scrollPos * 0.2) + 'px)'; // Más lento
        figureLayer.style.transform = 'translateY(' + (-scrollPos * 0.4) + 'px)';   // Velocidad media
        planetLayer.style.transform = 'translateY(' + (-scrollPos * 0.6) + 'px)';   // Más rápido
    });
});