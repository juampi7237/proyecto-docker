package com.juan.gonzales.clinica.controllers;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = { "http://localhost", "http://localhost:5173", "http://frontend" })
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<ProductEntity> findAll() {
        return productService.findAllProducts();
    }

    @GetMapping("/{id}")
    public ProductEntity findById(@PathVariable Long id) {
        return productService.findProductById(id);
    }

    @PostMapping
    public ProductEntity saveProduct(@RequestBody ProductEntity service) {
        return productService.saveProduct(service);
    }

    @PutMapping("/{id}")
    public ProductEntity updateProduct(@PathVariable Long id, @RequestBody ProductEntity service) {
        return productService.updateProduct(id, service);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        productService.deleteProductById(id);
    }
}
