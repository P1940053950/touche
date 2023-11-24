package com.touche.backend.repository;

import com.touche.backend.domain.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

//    List<Appointment> getAllById();
//
//    Optional<Appointment> getAppointmentById(long id);
}
