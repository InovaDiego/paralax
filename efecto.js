document.addEventListener('DOMContentLoaded', function() {
  // --- PARALLAX ---
  const layers = document.querySelectorAll('.parallax-layer');

  const handleParallax = () => {
    const scrollPosition = window.scrollY; // Ya no se divide, lo controlamos con speed
    layers.forEach(layer => {
      let speed = 0;
      if (layer.classList.contains('layer-1')) speed = 0.2;
      else if (layer.classList.contains('layer-2')) speed = 0.4;
      else if (layer.classList.contains('layer-3')) speed = 0.6;
      const yPos = scrollPosition * speed;
      layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  };

  window.addEventListener('scroll', handleParallax);

  // --- BOTÓN DE SCROLL HACIA ARRIBA ---
  const scrollBtn = document.getElementById('scrollTopBtn');

  // Seguridad: verificar si el botón existe antes de agregar listeners
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) scrollBtn.classList.add('visible');
      else scrollBtn.classList.remove('visible');
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
