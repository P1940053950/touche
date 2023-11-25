package com.touche.backend.service;

import com.touche.backend.domain.Appointment;
import com.touche.backend.dto.AppointmentDTO;
import com.touche.backend.repository.AppointmentRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    @Transactional
    public Appointment createAppointment(AppointmentDTO dto) {
        Appointment newAppointment = toAppointmentModel(dto);
        return appointmentRepository.save(newAppointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    

    public Appointment getAppointmentById(long id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Appointment with id='%d' not found!".formatted(id)));
    }

    private static Appointment toAppointmentModel(final AppointmentDTO dto) {
        return new Appointment();
    }

    @Transactional
    public Appointment updateAppointment(long id, AppointmentDTO dto) {
        Appointment appointmentToUpdate = getAppointmentById(id);
        appointmentToUpdate.setDate(appointmentToUpdate.getDate());
        return appointmentToUpdate;
    }

    @Transactional
    public void deleteAppointment(long id) {
        Appointment existedAppointment = getAppointmentById(id);
        appointmentRepository.delete(existedAppointment);
    }
}
