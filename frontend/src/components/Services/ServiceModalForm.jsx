import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";
import ServiceForm from "./ServiceForm";

export const ServiceModalForm = () => {
  const { serviceSelected, handlerCloseForm } = useContext(ServiceContext);

  return (
    <div className="abrir-modal animacion fadeIn">
      <div className="modal " style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{serviceSelected.id > 0 ? "Editar" : "Crear"} Servicio</h5>
            </div>
            <div className="modal-body">
              <ServiceForm serviceSelected={serviceSelected} handlerCloseForm={handlerCloseForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
