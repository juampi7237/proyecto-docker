import { isAxiosError } from "axios";
import api from "./axios";

export const getAllProducts = async () => {
  try {
    const { data } = await api("/products");
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al conectar con el servidor";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al cargar los productos");
  }
};

export const createProduct = async ({ name, description, price }) => {
  try {
    return await api.post("/products", {
      name,
      description,
      price,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al crear el producto";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al crear el producto");
  }
};

export const updateProduct = async ({ id, name, description, price }) => {
  try {
    return await api.put(`/products/${id}`, {
      name,
      description,
      price,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al actualizar el producto";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al actualizar el producto");
  }
};

export const deleteProduct = async (id) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al eliminar el producto";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al eliminar el producto");
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await api(`/products/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error || "Error al obtener los detalles del producto";
      throw new Error(errorMessage);
    }
    throw new Error("Error inesperado al obtener los detalles del producto");
  }
}; 