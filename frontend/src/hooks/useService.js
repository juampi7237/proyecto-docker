import { useReducer, useState } from "react";
import { serviceReducer } from "../reducers/ServiceReducers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createService, deleteService, getAllServices, updateService } from "../api/serviceApi";

const initialService = [];

const initialServiceForm = {
  id: 0,
  name: "",
  description: "",
};

export const useServices = () => {
  const [services, dispatch] = useReducer(serviceReducer, initialService);
  const [serviceSelected, setServiceSelected] = useState(initialServiceForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getServices = async () => {
    try {
      const result = await getAllServices();
      if (result) {
        dispatch({
          type: "loadingServices",
          payload: result,
        });
      }
    } catch (error) {
      console.error("Error loading services:", error);
      Swal.fire("Error", "No se pudieron cargar los servicios", "error");
    }
  };

  const handlerAddService = async (service) => {
    // console.log(service);

    let response;

    if (service.id === 0) {
      response = await createService(service);
    } else {
      response = await updateService(service);
    }

    dispatch({
      type: service.id === 0 ? "addService" : "updateService",
      payload: response.data,
    });

    Swal.fire(
      service.id === 0 ? "Servicio Creado" : "Servicio Actualizado",
      service.id === 0 ? "El servicio ha sido creado con exito!" : "El servicio ha sido actualizado con exito!",
      "success"
    );
    handlerCloseForm();
    navigate("/services");
  };

  const handlerRemoveService = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Esta seguro que desea eliminar?",
      text: "Cuidado el servicio sera eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteService(id);
        dispatch({
          type: "deleteService",
          payload: id,
        });
        Swal.fire("servicio Eliminado!", "El servicio ha sido eliminado con exito!", "success");
      }
    });
  };

  const handlerServiceSelectedForm = (service) => {
    // console.log(service)
    setVisibleForm(true);
    setServiceSelected({ ...service });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setServiceSelected(initialServiceForm);
  };
  return {
    services,
    serviceSelected,
    initialServiceForm,
    visibleForm,
    handlerAddService,
    handlerRemoveService,
    handlerServiceSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getServices,
  };
};
