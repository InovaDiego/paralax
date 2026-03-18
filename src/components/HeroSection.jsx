import { useEffect, useRef } from 'react';
import Navbar from './Navbar';

function HeroSection() {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      if (layer1Ref.current)
        layer1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.2}px, 0)`;
      if (layer2Ref.current)
        layer2Ref.current.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0)`;
      if (layer3Ref.current)
        layer3Ref.current.style.transform = `translate3d(0, ${scrollY * 0.6}px, 0)`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <header className="hero-parallax-container">
      <div className="parallax-layer layer-1" ref={layer1Ref}></div>
      <div className="parallax-layer layer-2" ref={layer2Ref}>
        <div className="animated-content"></div>
      </div>
      <div className="parallax-layer layer-3" ref={layer3Ref}></div>

      <div className="hero-content container-fluid">
        <Navbar />
        <div className="hero-text">
          <h1>
            BIG<span className="pipe">|</span>UNIVERSE
          </h1>
          <p>NEW DISPENSER ACCOUNTS Y MÁS!</p>
          <a href="#generar" className="cta-button discord-btn">
            Empezar a Generar
          </a>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
