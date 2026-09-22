import "../Css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Nails by Lucero</h3>
          <p>
            Belleza, cuidado y estilo en cada detalle.
          </p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>

          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>

          <p>📍 Lima, Perú</p>
          <p>📞 Atención personalizada</p>
          <p>✉ Consulta nuestras redes sociales</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Nails by Lucero. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;