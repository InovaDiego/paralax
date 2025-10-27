document.addEventListener('DOMContentLoaded', function() {
    // --- Parallax de múltiples capas en el HEADER ---
    const parallaxLayers = document.querySelectorAll('.hero-parallax-container .parallax-layer');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY;

        parallaxLayers.forEach(layer => {
            const speed = parseFloat(layer.getAttribute('data-speed'));
            // Cuanto mayor sea 'speed', más rápido se moverá el fondo
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
                // Calcula la posición para desplazamiento suave
                const offset = 0; 
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});