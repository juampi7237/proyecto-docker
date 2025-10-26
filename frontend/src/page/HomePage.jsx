import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="w-100" style={{ marginTop: "56px" }}>
      <div className="container py-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-4">Bienvenidos a Nuestra Empresa</h1>
            <p className="lead">
              Somos una empresa comprometida con la excelencia y la innovación, brindando soluciones de alta calidad
              para nuestros clientes.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contactanos
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Hero Image"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center mb-4">Nuestra Empresa</h2>
            <p className="text-center">
              Con años de experiencia en el mercado, nos hemos consolidado como líderes en la industria, ofreciendo
              productos y servicios de la más alta calidad. Nuestro compromiso con la satisfacción del cliente y la
              innovación continua nos ha permitido mantener una posición destacada en el sector.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="bi bi-shield-check text-primary display-4 mb-3"></i>
              <h3>Calidad Garantizada</h3>
              <p>Utilizamos los mejores materiales y técnicas para asegurar resultados óptimos.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="bi bi-clock text-primary display-4 mb-3"></i>
              <h3>Horarios Flexibles</h3>
              <p>Adaptamos nuestros horarios para tu comodidad y disponibilidad.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center">
              <i className="bi bi-people text-primary display-4 mb-3"></i>
              <h3>Personal Especializado</h3>
              <p>Contamos con un equipo de profesionales altamente capacitados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
