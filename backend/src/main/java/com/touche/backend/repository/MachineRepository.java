package com.touche.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.touche.backend.domain.Machine;

import java.util.List;
import java.util.Optional;

public interface MachineRepository extends JpaRepository<Machine, Long> {

    List<Machine> findAllById();
    Optional<Machine> findById(long id);
}
