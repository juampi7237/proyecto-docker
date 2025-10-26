import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Maestría App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/") ? "active" : ""}`} to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/about") ? "active" : ""}`} to="/about">
                    Quiénes Somos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/contact") ? "active" : ""}`} to="/contact">
                    Contacto
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/services") ? "active" : ""}`} to="/services">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${isActive("/products") ? "active" : ""}`} to="/products">
                    Productos
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
            {!isAuthenticated ? (
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/login") ? "active" : ""}`} to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
