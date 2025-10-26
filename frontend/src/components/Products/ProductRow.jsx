import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductRow({ id, name, description, price }) {
  const { handlerProductSelectedForm, handlerRemoveProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const onRemoveProduct = (id) => {
    handlerRemoveProduct(id);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>${price}</td>
      <td>
        <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/products/${id}`)}>
          details
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm me-2"
          onClick={() =>
            handlerProductSelectedForm({
              id,
              name,
              description,
              price,
            })
          }
        >
          update
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveProduct(id)}>
          remove
        </button>
      </td>
    </tr>
  );
}
