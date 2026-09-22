import "../Css/Galeria.css";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&w=700&q=80",
    title: "Nail Art",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=700&q=80",
    title: "Manicure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
    title: "Diseños",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
    title: "Estilo",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=700&q=80",
    title: "Detalles",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop&auto=format",
    title: "Belleza",
  },
];

function Galeria() {
  return (
    <section className="gallery-page">

      <div className="gallery-header">
        <p>INSPÍRATE</p>

        <h1>
          Nuestra <em>galería</em>
        </h1>

        <span>
          Algunos estilos para inspirar tu próxima visita.
        </span>
      </div>

      <div className="gallery-grid">

        {gallery.map((item) => (
          <div className="gallery-item" key={item.title}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>

          </div>
        ))}

      </div>

      <div className="gallery-footer">
        <p>
          ¿Ya tienes un diseño en mente?
        </p>

        <a href="#reservar">
          Reserva tu cita →
        </a>
      </div>

    </section>
  );
}

export default Galeria;