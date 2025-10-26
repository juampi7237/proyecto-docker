import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ServiceContext } from "../../contexts/ServiceContext";

export default function ServiceForm({ serviceSelected, handlerCloseForm }) {
  const { initialServiceForm, handlerAddService } = useContext(ServiceContext);

  const [serviceForm, setServiceForm] = useState(initialServiceForm);

  const { id, name, description } = serviceForm;

  useEffect(() => {
    setServiceForm({
      ...serviceSelected,
      password: "",
    });
  }, [serviceSelected]);

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    const { name, value } = target;
    setServiceForm({
      ...serviceForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !description) {
      Swal.fire("Erro de validacion", "Debe completar los campos del formulario!", "error");
      return;
    }
    console.log(serviceForm);
    handlerAddService(serviceForm);
    setServiceForm(initialServiceForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setServiceForm(initialServiceForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="form-control my-3 w-75" placeholder="Name" name="name" value={name} onChange={onInputChange} />
      <input
        className="form-control my-3 w-75"
        placeholder="Description"
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-primary" type="submit">
        {id > 0 ? "Editar" : "Crear"}
      </button>
      {!handlerCloseForm || (
        <button className="btn btn-primary mx-2" type="button" onClick={() => onCloseForm()}>
          Cerrar
        </button>
      )}
    </form>
  );
}
