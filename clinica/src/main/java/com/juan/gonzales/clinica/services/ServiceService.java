package com.juan.gonzales.clinica.services;

import com.juan.gonzales.clinica.entities.ProductEntity;
import com.juan.gonzales.clinica.entities.ServiceEntity;

import java.util.List;

public interface ServiceService {
    List<ServiceEntity> findAllService();
    ServiceEntity findServiceById(Long id);
    ServiceEntity saveService(ServiceEntity service);
    ServiceEntity updateService(Long id, ServiceEntity service);
    void deleteServiceById(Long id);
    ServiceEntity addProductsToService(Long serviceId, List<ProductEntity> products);
    ServiceEntity addProductsToServiceByIds(Long serviceId, List<Long> productIds);
    ServiceEntity removeProductsFromService(Long serviceId, List<Long> productIds);
}
