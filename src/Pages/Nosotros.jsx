import "../Css/Nosotros.css";

function Nosotros() {
  return (
    <section className="about-page">

      <div className="about-hero">
        <p>CONÓCENOS</p>

        <h1>
          Más que belleza,
          <br />
          <em>una experiencia.</em>
        </h1>
      </div>


      <div className="about-content">

        <div className="about-image">
          <div className="about-image-card">
            <span>NL</span>
            <small>Nails by Lucero</small>
          </div>
        </div>

        <div className="about-text">

          <p className="section-label">
            NUESTRA HISTORIA
          </p>

          <h2>
            Un espacio creado
            <br />
            <em>para ti.</em>
          </h2>

          <p>
            Nails by Lucero nace con la idea de crear un espacio
            donde el cuidado personal se combine con un servicio
            cercano, profesional y lleno de detalles.
          </p>

          <p>
            Nos enfocamos en conocer lo que cada clienta busca
            y convertirlo en una experiencia de belleza que se
            adapte a su personalidad y estilo.
          </p>

          <a href="#reservar">
            Conoce nuestros servicios →
          </a>

        </div>

      </div>


      <div className="values">

        <div>
          <span>01</span>
          <h3>Calidad</h3>
          <p>
            Cuidamos cada detalle de nuestro trabajo.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Personalización</h3>
          <p>
            Cada persona tiene un estilo diferente.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Confianza</h3>
          <p>
            Queremos que te sientas cómoda desde que llegas.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Nosotros;