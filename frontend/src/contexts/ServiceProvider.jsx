import { useServices } from "../hooks/useService";
import { ServiceContext } from "./ServiceContext";

export const ServiceProvider = ({ children }) => {
  const {
    services,
    serviceSelected,
    initialServiceForm,
    handlerAddService,
    handlerRemoveService,
    handlerServiceSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    visibleForm,
    getServices,
  } = useServices();

  return (
    <ServiceContext.Provider
      value={{
        services,
        serviceSelected,
        initialServiceForm,
        handlerAddService,
        handlerRemoveService,
        handlerServiceSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        visibleForm,
        getServices,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
