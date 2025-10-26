package com.juan.gonzales.clinica.controllers;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.entities.ServiceEntity;
import com.juan.gonzales.clinica.services.ServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
@CrossOrigin(origins = { "http://localhost", "http://localhost:5173", "http://frontend" })
public class ServiceController {

    private final ServiceService serviceService;

    @GetMapping
    public List<ServiceEntity> findAll() {
        return serviceService.findAllService();
    }

    @GetMapping("/{id}")
    public ServiceEntity findById(@PathVariable Long id) {
        return serviceService.findServiceById(id);
    }

    @PostMapping
    public ServiceEntity saveService(@RequestBody ServiceEntity service) {
        return serviceService.saveService(service);
    }

    @PutMapping("/{id}")
    public ServiceEntity updateService(@PathVariable Long id, @RequestBody ServiceEntity service) {
        return serviceService.updateService(id, service);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        serviceService.deleteServiceById(id);
    }

    @PostMapping("/{id}/products")
    public ServiceEntity addProductsToService(@PathVariable Long id, @RequestBody List<ProductEntity> products) {
        return serviceService.addProductsToService(id, products);
    }

    @PostMapping("/{id}/add")
    public ServiceEntity addProductsToServiceByIds(@PathVariable Long id, @RequestBody List<Long> products) {
        return serviceService.addProductsToServiceByIds(id, products);
    }

    @DeleteMapping("/{id}/remove")
    public ServiceEntity removeProductsFromService(@PathVariable Long id, @RequestBody List<Long> products) {
        return serviceService.removeProductsFromService(id, products);
    }
}
