import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ServiceContext } from "../contexts/ServiceContext";
import { getServiceById, addProductsToService, removeProductsFromService } from "../api/serviceApi";
import { AddProductsModal } from "../components/Services/AddProductsModal";
import Swal from "sweetalert2";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  const loadService = async () => {
    try {
      const data = await getServiceById(id);
      setService(data);
    } catch (error) {
      console.error("Error loading service details:", error);
      Swal.fire("Error", "No se pudieron cargar los detalles del servicio", "error");
      navigate("/services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadService();
  }, [id, navigate]);

  const handleAddProducts = async (productIds) => {
    try {
      await addProductsToService(id, productIds);
      await loadService();
      setShowAddModal(false);
      Swal.fire("Éxito", "Productos agregados correctamente", "success");
    } catch (error) {
      console.error("Error adding products:", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      await Swal.fire({
        title: "¿Está seguro?",
        text: "¿Desea eliminar este producto del servicio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await removeProductsFromService(id, [productId]);
          await loadService();
          Swal.fire("Éxito", "Producto eliminado correctamente", "success");
        }
      });
    } catch (error) {
      console.error("Error removing product:", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  if (loading) {
    return (
      <div className="container my-4">
        <div className="alert alert-info">Cargando detalles del servicio...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container my-4">
        <div className="alert alert-danger">Servicio no encontrado</div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2>Detalles del Servicio</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Productos Asociados</h3>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          Agregar Productos
        </button>
      </div>

      {service.products && service.products.length > 0 ? (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {service.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleRemoveProduct(product.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">No hay productos asociados a este servicio</div>
      )}

      <button className="btn btn-secondary" onClick={() => navigate("/services")}>
        Volver a Servicios
      </button>

      {showAddModal && (
        <AddProductsModal serviceId={id} onClose={() => setShowAddModal(false)} onSave={handleAddProducts} />
      )}
    </div>
  );
}
