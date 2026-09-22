import ServiceCard from "../components/ServiceCard";
import "../Css/Servicios.css";

const services = [
  {
    icon: "♡",
    title: "Manicure",
    description:
      "Cuidado completo de tus uñas con diferentes acabados y estilos.",
    price: "Consultar",
  },
  {
    icon: "✦",
    title: "Pedicure",
    description:
      "Limpieza, cuidado y embellecimiento para que tus pies luzcan increíbles.",
    price: "Consultar",
  },
  {
    icon: "✧",
    title: "Nail Art",
    description:
      "Diseños personalizados, desde estilos minimalistas hasta propuestas creativas.",
    price: "Consultar",
  },
  {
    icon: "✿",
    title: "Uñas Gel",
    description:
      "Acabado elegante y duradero para complementar tu estilo.",
    price: "Consultar",
  },
  {
    icon: "❀",
    title: "Diseños Especiales",
    description:
      "Creamos diseños especiales para eventos, celebraciones y ocasiones importantes.",
    price: "Consultar",
  },
  {
    icon: "✧",
    title: "Cuidado de Uñas",
    description:
      "Tratamientos orientados al cuidado y mantenimiento de tus uñas.",
    price: "Consultar",
  },
];

function Servicios() {
  return (
    <section className="services-page">

      <div className="page-header">
        <p>NAILS BY LUCERO</p>

        <h1>
          Nuestros <em>servicios</em>
        </h1>

        <span>
          Todo lo que necesitas para cuidar y expresar tu estilo.
        </span>
      </div>

      <div className="services-page-content">

        <div className="services-page-grid">
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

      </div>

      <div className="services-bottom">
        <h2>
          ¿No sabes qué servicio elegir?
        </h2>

        <p>
          Escríbenos y te ayudaremos a encontrar la mejor opción para ti.
        </p>

        <a href="#contacto">
          Consultar →
        </a>
      </div>

    </section>
  );
}

export default Servicios;