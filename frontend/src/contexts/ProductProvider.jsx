import { useProducts } from "../hooks/useProduct";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const {
    products,
    productSelected,
    initialProductForm,
    handlerAddProduct,
    handlerRemoveProduct,
    handlerProductSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    visibleForm,
    getProducts,
  } = useProducts();

  return (
    <ProductContext.Provider
      value={{
        products,
        productSelected,
        initialProductForm,
        handlerAddProduct,
        handlerRemoveProduct,
        handlerProductSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        visibleForm,
        getProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}; 