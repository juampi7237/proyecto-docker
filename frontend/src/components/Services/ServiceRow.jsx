import { useContext } from "react";
import { ServiceContext } from "../../contexts/ServiceContext";
import { useNavigate } from "react-router-dom";

export default function ServiceRow({ id, name, description }) {
  const { handlerServiceSelectedForm, handlerRemoveService } = useContext(ServiceContext);
  const navigate = useNavigate();

  const onRemoveService = (id) => {
    handlerRemoveService(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/services/${id}`)}>
          details
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm me-2"
          onClick={() =>
            handlerServiceSelectedForm({
              id,
              name,
              description,
            })
          }
        >
          update
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveService(id)}>
          remove
        </button>
      </td>
    </tr>
  );
}
