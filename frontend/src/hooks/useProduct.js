import { useReducer, useState } from "react";
import { productReducer } from "../reducers/ProductReducers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createProduct, deleteProduct, getAllProducts, updateProduct } from "../api/productApi";

const initialProduct = [];

const initialProductForm = {
  id: 0,
  name: "",
  description: "",
  price: 0,
};

export const useProducts = () => {
  const [products, dispatch] = useReducer(productReducer, initialProduct);
  const [productSelected, setProductSelected] = useState(initialProductForm);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const result = await getAllProducts();
      if (result) {
        dispatch({
          type: "loadingProducts",
          payload: result,
        });
      }
    } catch (error) {
      console.error("Error loading products:", error);
      Swal.fire("Error", "No se pudieron cargar los productos", "error");
    }
  };

  const handlerAddProduct = async (product) => {
    try {
      let response;

      if (product.id === 0) {
        response = await createProduct(product);
      } else {
        response = await updateProduct(product);
      }

      dispatch({
        type: product.id === 0 ? "addProduct" : "updateProduct",
        payload: response.data,
      });

      Swal.fire(
        product.id === 0 ? "Producto Creado" : "Producto Actualizado",
        product.id === 0 ? "El producto ha sido creado con exito!" : "El producto ha sido actualizado con exito!",
        "success"
      );
      handlerCloseForm();
      navigate("/products");
    } catch (error) {
      console.error("Error saving product:", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handlerRemoveProduct = (id) => {
    Swal.fire({
      title: "Esta seguro que desea eliminar?",
      text: "Cuidado el producto sera eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id);
          dispatch({
            type: "deleteProduct",
            payload: id,
          });
          Swal.fire("Producto Eliminado!", "El producto ha sido eliminado con exito!", "success");
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire("Error", error.message, "error");
        }
      }
    });
  };

  const handlerProductSelectedForm = (product) => {
    setVisibleForm(true);
    setProductSelected({ ...product });
  };

  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setProductSelected(initialProductForm);
  };

  return {
    products,
    productSelected,
    initialProductForm,
    visibleForm,
    handlerAddProduct,
    handlerRemoveProduct,
    handlerProductSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
    getProducts,
  };
}; 