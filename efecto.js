document.addEventListener('DOMContentLoaded', function() {
    // --- Parallax de múltiples capas en el HEADER ---
    const parallaxLayers = document.querySelectorAll('.hero-parallax-container .parallax-layer');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;

        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            // Cuanto mayor sea 'speed', más rápido se moverá el fondo
            // El signo negativo hace que se mueva hacia arriba al hacer scroll hacia abajo
            layer.style.transform = 'translateY(' + (-scrollPos * speed) + 'px)';
        });
    });

    // --- Smooth Scroll para los enlaces del menú ---
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula la posición para tener en cuenta la altura del navbar si es necesario
                const offset = 0; // Ajusta si el navbar es fijo y cubre el inicio de la sección
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});