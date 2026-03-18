import { useState } from 'react';

const proofs = [
  {
    image: '/imagenes/Proof_1.webp',
    title: 'Vouch #1',
    text: 'Entrega completa y soporte activo. Cuenta funcionando sin problemas.',
    author: 'Cliente verificado',
  },
  {
    image: '/imagenes/Proof_2.webp',
    title: 'Vouch #2',
    text: 'Proceso rapido, instrucciones claras y atencion inmediata por Discord.',
    author: 'Usuario premium',
  },
  {
    image: '/imagenes/Proof_3.webp',
    title: 'Vouch #3',
    text: 'Servicio legit. Recibi mi acceso y validacion tal como se prometio.',
    author: 'Comprador recurrente',
  },
  {
    image: '/imagenes/Proof_5.webp',
    title: 'Vouch #5',
    author: 'Servicio 100% Legit',
  },
  {
    image: '/imagenes/Proof_6.webp',
    title: 'Vouch #6',
    author: 'Servicio 100% Legit',
  },
  {
    image: '/imagenes/Proof_7.webp',
    title: 'Vouch #7',
    author: 'Servicio 100% Legit',
  },
];

function ProofsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? proofs.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === proofs.length - 1 ? 0 : prev + 1));
  };

  const currentProof = proofs[activeIndex];

  return (
    <section id="legit" className="content-section parallax-fixed-bg">
      <div className="section-overlay generador-accounts">
        <div className="proofs-block">
          <h2>Proofs and Vouches</h2>
          <p className="proofs-subtitle">
            Evidencias reales de clientes que validan el servicio brindado.
          </p>

          <div className="proofs-carousel" aria-live="polite">
            <button
              type="button"
              className="carousel-control"
              onClick={goToPrevious}
              aria-label="Anterior"
            >
              {'<'}
            </button>

            <article className="proof-slide">
              <img
                src={currentProof.image}
                alt={currentProof.title}
                className="proof-image"
              />
              <div className="proof-caption">
                <h4>{currentProof.title}</h4>
                <p>{currentProof.text}</p>
                <span>{currentProof.author}</span>
              </div>
            </article>

            <button
              type="button"
              className="carousel-control"
              onClick={goToNext}
              aria-label="Siguiente"
            >
              {'>'}
            </button>
          </div>

          <div className="carousel-indicators">
            {proofs.map((proof, index) => (
              <button
                key={proof.title}
                type="button"
                className={`indicator-dot ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al vouch ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProofsSection;
