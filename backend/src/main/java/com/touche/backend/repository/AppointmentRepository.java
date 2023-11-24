package com.touche.backend.repository;

import com.touche.backend.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    List<Appointment> getAllById();

    Optional<Appointment> getAppointmentById(long id);
}
