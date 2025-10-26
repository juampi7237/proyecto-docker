import { useContext, useEffect } from "react";
import { ProductModalForm } from "../components/Products/ProductModalForm";
import ProductsList from "../components/Products/ProductsList";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductPage() {
  const { products, handlerOpenForm, visibleForm, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {!visibleForm || <ProductModalForm />}
      <div className="container my-4">
        <h2>Products</h2>
        <div className="row">
          <div className="col">
            {visibleForm || (
              <button className="btn btn-primary my-2" onClick={handlerOpenForm}>
                New Product
              </button>
            )}

            {products.length === 0 ? (
              <div className="alert alert-warning">No hay Productos en el sistema!</div>
            ) : (
              <ProductsList />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
