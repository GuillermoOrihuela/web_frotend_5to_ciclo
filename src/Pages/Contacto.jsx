import "../Css/Contacto.css";

function Contacto() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <p>ESTAMOS PARA TI</p>

        <h1>
          Ponte en <em>contacto</em>
        </h1>

        <span>
          ¿Tienes alguna consulta? Escríbenos.
        </span>
      </div>

      <div className="contact-content">

        <div className="contact-info">

          <p className="section-label">
            CONTÁCTANOS
          </p>

          <h2>
            Hablemos.
          </h2>

          <p>
            Si necesitas información sobre nuestros servicios,
            horarios o reservas, estaremos encantados de ayudarte.
          </p>

          <div className="contact-item">
            <strong>📍 Ubicación</strong>
            <span>Lima, Perú</span>
          </div>

          <div className="contact-item">
            <strong>🕐 Horario</strong>
            <span>Consulta nuestros horarios de atención</span>
          </div>

          <div className="contact-item">
            <strong>💬 Atención</strong>
            <span>Escríbenos por nuestras redes sociales</span>
          </div>

        </div>


        <form className="contact-form">

          <label>
            Nombre
            <input
              type="text"
              placeholder="Tu nombre"
            />
          </label>

          <label>
            Correo electrónico
            <input
              type="email"
              placeholder="tu@email.com"
            />
          </label>

          <label>
            Mensaje
            <textarea
              rows="5"
              placeholder="¿En qué podemos ayudarte?"
            />
          </label>

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contacto;