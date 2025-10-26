import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductRow from "./ProductRow";

export default function ProductsList() {
  const { products } = useContext(ProductContext);

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ id, name, description, price }) => (
          <ProductRow key={id} id={id} name={name} description={description} price={price} />
        ))}
      </tbody>
    </table>
  );
}
