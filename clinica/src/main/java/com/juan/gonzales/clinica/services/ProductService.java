package com.juan.gonzales.clinica.services;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.entities.ServiceEntity;

import java.util.List;

public interface ProductService {
    List<ProductEntity> findAllProducts();
    ProductEntity findProductById(Long id);
    ProductEntity saveProduct(ProductEntity product);
    ProductEntity updateProduct(Long id, ProductEntity product);
    void deleteProductById(Long id);
}
