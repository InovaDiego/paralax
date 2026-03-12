import { useEffect, useState } from 'react';

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-top-btn${visible ? ' visible' : ''}`}
      title="Volver arriba"
      onClick={scrollToTop}
    >
      <i className="bi bi-rocket-takeoff"></i>
    </button>
  );
}

export default ScrollTopButton;
