import ServiceCard from "../components/ServiceCard";
import "../Css/Home.css";

const services = [
  {
    icon: "✦",
    title: "Manicure",
    description:
      "Cuidado y diseño de uñas con acabados delicados, elegantes y personalizados.",
    price: "Consultar precio",
  },
  {
    icon: "♡",
    title: "Pedicure",
    description:
      "Un momento de cuidado para tus pies con atención en cada detalle.",
    price: "Consultar precio",
  },
  {
    icon: "✧",
    title: "Nail Art",
    description:
      "Diseños creativos para expresar tu estilo y personalidad.",
    price: "Consultar precio",
  },
];

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            BELLEZA · CUIDADO · ESTILO
          </p>

          <h1>
            Tus uñas,
            <br />
            <span>tu estilo.</span>
          </h1>

          <p className="hero-description">
            Descubre una experiencia de belleza pensada para ti.
            En Nails by Lucero cuidamos cada detalle para que
            te sientas increíble.
          </p>

          <div className="hero-buttons">
            <a href="#reservar" className="primary-button">
              Reservar cita
            </a>

            <a href="#servicios" className="secondary-button">
              Ver servicios
            </a>
          </div>

        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            <span>Nails</span>
            <small>by Lucero</small>
          </div>
        </div>

      </section>


      <section className="home-intro">

        <div>
          <p className="section-label">
            BIENVENIDA
          </p>

          <h2>
            Un espacio para
            <br />
            <em>ti.</em>
          </h2>
        </div>

        <p>
          Creemos que cuidar de ti también es una forma de
          quererte. Por eso creamos un espacio tranquilo,
          femenino y acogedor donde cada servicio está pensado
          para hacerte sentir especial.
        </p>

      </section>


      <section className="home-services">

        <div className="section-heading">
          <div>
            <p className="section-label">
              NUESTROS SERVICIOS
            </p>

            <h2>
              Belleza en cada
              <br />
              <em>detalle.</em>
            </h2>
          </div>

          <a href="#servicios">
            Ver todos →
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>

      </section>


      <section className="home-cta">

        <div>
          <p className="section-label">
            TU MOMENTO
          </p>

          <h2>
            ¿Lista para consentirte?
          </h2>

          <p>
            Agenda tu cita y déjanos cuidar de cada detalle.
          </p>

          <a href="#reservar" className="primary-button">
            Reservar mi cita
          </a>
        </div>

      </section>

    </div>
  );
}

export default Home;