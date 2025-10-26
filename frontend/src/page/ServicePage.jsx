import { useContext, useEffect } from "react";
import { ServiceModalForm } from "../components/Services/ServiceModalForm";
import ServicesList from "../components/Services/ServicesList";
import { ServiceContext } from "../contexts/ServiceContext";

export default function ServicePage() {
  const { services, handlerOpenForm, visibleForm, getServices } = useContext(ServiceContext);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {!visibleForm || <ServiceModalForm />}
      <div className="container my-4">
        <h2>Services</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                New Service
              </button>
            )}

            {services.length === 0 ? (
              <div className="alert alert-warning">No hay Servicios en el sistema!</div>
            ) : (
              <ServicesList />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
