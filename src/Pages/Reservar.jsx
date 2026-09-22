import { useState } from "react";
import "../Css/Reservar.css";

function Reservar() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="booking-page">

      <div className="booking-header">
        <p>NAILS BY LUCERO</p>

        <h1>
          Reserva tu <em>cita</em>
        </h1>

        <span>
          Elige el servicio que deseas y déjanos tus datos.
        </span>
      </div>


      <div className="booking-container">

        <div className="booking-info">

          <p className="section-label">
            RESERVACIÓN
          </p>

          <h2>
            Tu momento
            <br />
            comienza aquí.
          </h2>

          <p>
            Completa el formulario y nos pondremos en contacto
            contigo para confirmar tu cita.
          </p>

          <div className="booking-note">
            <strong>Importante</strong>

            <span>
              La reserva será confirmada por el salón.
            </span>
          </div>

        </div>


        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <label>
              Nombre completo

              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </label>

            <label>
              Teléfono

              <input
                type="tel"
                name="telefono"
                placeholder="Tu teléfono"
                required
              />
            </label>

          </div>


          <label>
            Correo electrónico

            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              required
            />
          </label>


          <label>
            Servicio

            <select name="servicio" required>
              <option value="">
                Selecciona un servicio
              </option>

              <option value="manicure">
                Manicure
              </option>

              <option value="pedicure">
                Pedicure
              </option>

              <option value="nail-art">
                Nail Art
              </option>

              <option value="unas-gel">
                Uñas Gel
              </option>
            </select>
          </label>


          <div className="form-row">

            <label>
              Fecha

              <input
                type="date"
                name="fecha"
                required
              />
            </label>

            <label>
              Hora

              <input
                type="time"
                name="hora"
                required
              />
            </label>

          </div>


          <label>
            Comentario adicional

            <textarea
              name="comentario"
              rows="4"
              placeholder="Cuéntanos si tienes alguna preferencia..."
            />
          </label>


          <button type="submit">
            Solicitar cita
          </button>


          {submitted && (
            <div className="booking-success">
              ✓ Solicitud enviada correctamente.
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default Reservar;