import { useState } from "react";
import "../Css/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-script">Nails</span>
          <span className="logo-by">by</span>
          <span className="logo-name">Lucero</span>
        </a>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>

          <a href="#galeria" onClick={closeMenu}>
            Galería
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>

          <a
            href="#reservar"
            className="navbar-button"
            onClick={closeMenu}
          >
            Reservar cita
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;