package com.juan.gonzales.clinica.services.impl;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.entities.ServiceEntity;
import com.juan.gonzales.clinica.repositories.ProductRepository;
import com.juan.gonzales.clinica.repositories.ServiceRepository;
import com.juan.gonzales.clinica.services.ServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceServiceImpl implements ServiceService {

    private final ServiceRepository serviceRepository;
    private final ProductRepository productRepository;
    @Override
    public List<ServiceEntity> findAllService() {
        return serviceRepository.findAll();
    }

    @Override
    public ServiceEntity findServiceById(Long id) {
        return serviceRepository.findById(id).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));
    }

    @Override
    public ServiceEntity saveService(ServiceEntity service) {
        return serviceRepository.save(service);
    }

    @Override
    public ServiceEntity updateService(Long id, ServiceEntity service) {
        ServiceEntity oldService = serviceRepository.findById(id).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));
        oldService.setName(service.getName());
        oldService.setDescription(service.getDescription());

        if (service.getProducts() != null) {
            for (ProductEntity product : service.getProducts()) {
                product.setService(oldService);
                oldService.getProducts().add(product);
            }

        }
        return serviceRepository.save(oldService);
    }

    @Override
    public void deleteServiceById(Long id) {
        ServiceEntity oldService = serviceRepository.findById(id).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));
        serviceRepository.delete(oldService);
    }

    @Override
    public ServiceEntity addProductsToService(Long serviceId, List<ProductEntity> products) {
        ServiceEntity service = serviceRepository.findById(serviceId).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));

        for (ProductEntity product : products) {
            product.setService(service);
            service.getProducts().add(product);
        }
        return serviceRepository.save(service);
    }

    @Override
    @Transactional
    public ServiceEntity addProductsToServiceByIds(Long serviceId, List<Long> productIds) {
        ServiceEntity service = serviceRepository.findById(serviceId).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));

        List<ProductEntity> products = productRepository.findAllById(productIds);

        for (ProductEntity product : products) {
            product.setService(service);
            service.getProducts().add(product);
        }
        return serviceRepository.save(service);
    }

    @Override
    public ServiceEntity removeProductsFromService(Long serviceId, List<Long> productIds) {
        ServiceEntity service = serviceRepository.findById(serviceId).orElseThrow(() -> new RuntimeException("Servicio no encontrado"));

        // Buscar los productos por sus IDs
        List<ProductEntity> productos = productRepository.findAllById(productIds);

        // Eliminar los productos del servicio
        for (ProductEntity product : productos) {
            if (product.getService() != null && product.getService().getId().equals(serviceId)) {
                product.setService(null); // Desasignar el servicio del producto
                service.getProducts().remove(product); // Eliminar el producto de la lista del servicio
            }
        }

        return serviceRepository.save(service);
    }
}
