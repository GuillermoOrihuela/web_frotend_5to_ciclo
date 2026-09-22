import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Pages/Home.jsx";
import Servicios from "./Pages/Servicios.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import Galeria from "./Pages/Galeria.jsx";
import Contacto from "./Pages/Contacto.jsx";
import Reservar from "./Pages/Reservar.jsx";

import "./Css/App.css";


function App() {
  const getPage = () => {
    const hash = window.location.hash.replace("#", "");

    if (
      ["servicios", "nosotros", "galeria", "contacto", "reservar"].includes(
        hash
      )
    ) {
      return hash;
    }

    return "inicio";
  };

  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (page) {
      case "servicios":
        return <Servicios />;

      case "nosotros":
        return <Nosotros />;

      case "galeria":
        return <Galeria />;

      case "contacto":
        return <Contacto />;

      case "reservar":
        return <Reservar />;

      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar />

      <main>{renderPage()}</main>

      <Footer />

      <a
        className="whatsapp-button"
        href="#contacto"
        aria-label="Contactar con Nails by Lucero"
      >
        <span>✆</span>
      </a>
    </div>
  );
}

export default App;