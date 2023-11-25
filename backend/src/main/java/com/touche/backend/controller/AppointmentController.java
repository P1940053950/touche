package com.touche.backend.controller;


import com.touche.backend.domain.Appointment;
import com.touche.backend.dto.AppointmentDTO;
import com.touche.backend.service.AppointmentService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping(path = "/")
    public ResponseEntity<?> authenticate(@RequestBody Object object) {
        return ResponseEntity.ok(new Object());
    }

    @GetMapping
    public List<AppointmentDTO> findAllAppointments() {
        List<Appointment> existedAppointments = appointmentService.getAllAppointments();
        return existedAppointments.stream()
                .map(this::toAppointmentDTO)
                .collect(Collectors.toList());
    }

    @GetMapping(path = "/{id}")
    public AppointmentDTO findAppointmentById(@PathVariable(name = "id") long id) {
        Appointment existedAppointment = appointmentService.getAppointmentById(id);
        return toAppointmentDTO(existedAppointment);
    }

    @PutMapping(path = "/{id}")
    public AppointmentDTO updateAppointment(@RequestBody AppointmentDTO dto,
                                      @PathVariable(name = "id") long id) {
        Appointment updatedAppointment = appointmentService.updateAppointment(id, dto);
        return toAppointmentDTO(updatedAppointment);
    }

    @PostMapping(path = "/scheduleAppointment")
    public AppointmentDTO scheduleAppointment(@RequestBody ScheduleDto id) {


        return new AppointmentDTO();
    }

    @DeleteMapping(path = "/{id}")
    public void deleteAppointment(@PathVariable(name = "id") long id) {
        appointmentService.deleteAppointment(id);
    }

    private AppointmentDTO toAppointmentDTO(final Appointment appointment) {
        return new AppointmentDTO(
                appointment.getId(),
                appointment.getDuration(),
                appointment.getPatient(),
                appointment.getMachine(),
                appointment.getDate()
                );
    }
}
