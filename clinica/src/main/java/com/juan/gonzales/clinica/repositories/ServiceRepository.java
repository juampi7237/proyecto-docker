package com.juan.gonzales.clinica.repositories;

import com.juan.gonzales.clinica.entities.ServiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<ServiceEntity, Long> {
}
