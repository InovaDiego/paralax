document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Seleccionar todas las capas Parallax
    const layers = document.querySelectorAll('.parallax-layer');

    // 2. Definir el evento de scroll
    window.addEventListener('scroll', function() {
        
        // Obtiene la posición actual del scroll vertical.
        // Se divide entre 1 para hacer el movimiento más sutil.
        const scrollPosition = window.scrollY / 1; 

        // 3. Iterar sobre cada capa para aplicar el movimiento Parallax
        layers.forEach(layer => {
            
            // Determina la velocidad específica para cada capa
            let speed = 0; 
            
            // Capa 1: Fondo de galaxia (más lento, se siente más lejos)
            if (layer.classList.contains('layer-1')) {
                speed = 0.2; 
            } 
            
            // Capa 2: Contenido animado (Mano/Esfera, velocidad intermedia)
            else if (layer.classList.contains('layer-2')) {
                speed = 0.4; 
            } 
            
            // Capa 3: Planeta flotante (más rápido, se siente más cerca)
            else if (layer.classList.contains('layer-3')) {
                speed = 0.6; 
            }

            // 4. Calcular el desplazamiento vertical (translateY)
            // Multiplica la posición del scroll por la velocidad de la capa.
            const yPos = scrollPosition * speed;

            // 5. Aplicar la transformación CSS
            // Mueve la capa verticalmente usando la función translate3d
            // Se usa translate3d para forzar la aceleración por hardware (mejora el rendimiento)
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
});