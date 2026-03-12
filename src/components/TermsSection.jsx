function TermsSection() {
  return (
    <section id="terminos" className="content-section parallax-fixed-bg">
      <div className="section-overlay">
        <h2>Términos y Servicios</h2>
        <div className="icon-row flex-wrap">
          <img
            src="/imagenes/icon-gift.png"
            alt="Regalo Premium"
            className="section-icon"
          />
          <img
            src="/imagenes/icon-service.png"
            alt="Servicio Estelar"
            className="section-icon"
          />
          <span className="legit-badge mt-3 mt-md-0">100% REAL</span>
        </div>

        <p>
          Al utilizar esta web y verificar su cuenta con nuestros servicios
          usted está de acuerdo con nuestros términos...
        </p>

        <div className="info-columns">
          <div className="info-card">
            <p>
              Los productos mostrados tienen funciones de cuentas que se
              habilitan al ingreso del servidor...
            </p>
          </div>
          <div className="info-card">
            <p>
              Contamos con todo tipo de productos premium que puede visualizar
              en nuestro catálogo...
            </p>
          </div>
          <div className="info-card">
            <p>
              2INVITES=ACCOUNTS no se relaciona directamente con el uso
              incorrecto de las cuentas...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsSection;
