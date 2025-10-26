package com.juan.gonzales.clinica.services.impl;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.entities.ServiceEntity;
import com.juan.gonzales.clinica.repositories.ProductRepository;
import com.juan.gonzales.clinica.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    @Override
    public List<ProductEntity> findAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public ProductEntity findProductById(Long id) {
        return productRepository.findById(id).orElseThrow();
    }

    @Override
    public ProductEntity saveProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    @Override
    public ProductEntity updateProduct(Long id, ProductEntity product) {
        ProductEntity oldProduct = productRepository.findById(id).orElseThrow();
        oldProduct.setName(product.getName());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setPrice(product.getPrice());

        return productRepository.save(oldProduct);
    }

    @Override
    public void deleteProductById(Long id) {
        ProductEntity product = productRepository.findById(id).orElseThrow();
        productRepository.delete(product);
    }
}
