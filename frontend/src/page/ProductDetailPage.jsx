import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../api/productApi";
import Swal from "sweetalert2";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product details:", error);
        Swal.fire("Error", "No se pudieron cargar los detalles del producto", "error");
        navigate("/products");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container my-4">
        <div className="alert alert-info">Cargando detalles del producto...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">Producto no encontrado</div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Detalles del Producto</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Precio:</strong> ${product.price}
          </p>
        </div>
      </div>

      <button className="btn btn-secondary" onClick={() => navigate("/products")}>
        Volver a Productos
      </button>
    </div>
  );
} 