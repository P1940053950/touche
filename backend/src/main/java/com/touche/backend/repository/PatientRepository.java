package com.touche.backend.repository;

import com.touche.backend.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<> {
    List<Patient> findAllPatientsByIdAsc;
    Optional<Patient> findPatientById;
}
