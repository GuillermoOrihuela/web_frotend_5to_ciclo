import "../Css/ServiceCard.css";

function ServiceCard({ icon, title, description, price }) {
  return (
    <article className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="service-card-bottom">
        <span>{price}</span>

        <a href="#reservar">
          Reservar →
        </a>
      </div>

    </article>
  );
}

export default ServiceCard;