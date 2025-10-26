package com.juan.gonzales.clinica.repositories;

import com.juan.gonzales.clinica.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
}
