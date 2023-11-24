package com.touche.backend.controller;

import com.touche.backend.domain.Patient;
import com.touche.backend.dto.PatientDTO;
import com.touche.backend.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/patients")
public class PatientController {
    
    private final PatientService patientService;

    @GetMapping
    public List<PatientDTO> findAllPatients() {
        List<Patient> existedPatients = patientService.getAllPatients();
        return existedPatients.stream()
                .map(this::toPatientDTO)
                .collect(Collectors.toList());
    }

    @GetMapping(path = "/{id}")
    public PatientDTO findPatientById(@PathVariable(name = "id") long id) {
        Patient existedPatient = patientService.getPatientById(id);
        return toPatientDTO(existedPatient);
    }

    private PatientDTO toPatientDTO(final Patient patient) {
        return new PatientDTO(
                patient.getId(),
                patient.getName(),
                patient.getEmail(),
                patient.getPhone(),
                patient.getCreatedAt(),
                patient.getCancerType(),
                patient.getAppointments()
        );
    }
}
