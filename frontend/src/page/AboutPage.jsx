import React from "react";

export default function AboutPage() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Quienes Somos</h1>

      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Nuestra Vision</h2>
              <p className="card-text">
                Ser reconocidos como líderes en la industria, destacándonos por nuestra innovacion, calidad y compromiso
                con la excelencia. Aspiramos a ser la primera opción para nuestros clientes, manteniendo siempre los más
                altos estándares de servicio y satisfacción.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Nuestra Mision</h2>
              <p className="card-text">
                Proporcionar soluciones de alta calidad que superen las expectativas de nuestros clientes, contribuyendo
                a su éxito y desarrollo. Nos comprometemos a mantener la excelencia en todo lo que hacemos, fomentando
                la innovación y el crecimiento continuo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Nuestros Valores</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Excelencia</h5>
                  <p className="card-text">Buscamos la perfección en todo lo que hacemos</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Innovación</h5>
                  <p className="card-text">Constantemente buscamos nuevas soluciones</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Integridad</h5>
                  <p className="card-text">Actuamos con honestidad y transparencia</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">Compromiso</h5>
                  <p className="card-text">Nos dedicamos al éxito de nuestros clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
