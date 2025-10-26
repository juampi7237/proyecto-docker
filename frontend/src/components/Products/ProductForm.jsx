import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { ProductContext } from "../../contexts/ProductContext";

export default function ProductForm({ productSelected, handlerCloseForm }) {
  const { initialProductForm, handlerAddProduct } = useContext(ProductContext);

  const [productForm, setProductForm] = useState(initialProductForm);

  const { id, name, description, price } = productForm;

  useEffect(() => {
    setProductForm({
      ...productSelected,
    });
  }, [productSelected]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !description || !price) {
      Swal.fire("Error de validacion", "Debe completar los campos del formulario!", "error");
      return;
    }
    handlerAddProduct(productForm);
    setProductForm(initialProductForm);
  };

  const onCloseForm = () => {
    handlerCloseForm();
    setProductForm(initialProductForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Description"
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Price"
        type="number"
        name="price"
        value={price}
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