import { Route, Routes } from "react-router-dom";
import ServicePage from "../page/ServicePage";
import ServiceDetailPage from "../page/ServiceDetailPage";
import ProductPage from "../page/ProductPage";
import ProductDetailPage from "../page/ProductDetailPage";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ContactPage from "../page/ContactPage";
import LoginPage from "../page/LoginPage";
import Layout from "../components/Layout/Layout";
import { ServiceProvider } from "../contexts/ServiceProvider";
import { ProductProvider } from "../contexts/ProductProvider";
import { AuthProvider } from "../contexts/AuthProvider";
import { ProtectedRoute } from "../components/ProtectedRoute";

export const ServiceRoutes = () => {
  return (
    <AuthProvider>
      <ServiceProvider>
        <ProductProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/services" element={
                <ProtectedRoute>
                  <ServicePage />
                </ProtectedRoute>
              } />
              <Route path="/services/:id" element={
                <ProtectedRoute>
                  <ServiceDetailPage />
                </ProtectedRoute>
              } />
              <Route path="/products" element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              } />
              <Route path="/products/:id" element={
                <ProtectedRoute>
                  <ProductDetailPage />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </ProductProvider>
      </ServiceProvider>
    </AuthProvider>
  );
};
