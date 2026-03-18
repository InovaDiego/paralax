function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="logo">
          2INVITES<span className="pipe">|</span>ACCOUNT
        </div>
        <ul className="nav-links list-unstyled d-flex flex-wrap mb-0">
          <li className="mx-3">
            <a href="#home">Inicio</a>
          </li>
          <li className="mx-3">
            <a href="#generar">Generar</a>
          </li>
          <li className="mx-3">
            <a href="#legit">Proofs</a>
          </li>
          <li className="mx-3">
            <a href="#terminos">Términos y Condiciones</a>
          </li>
          <li className="mx-3">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
