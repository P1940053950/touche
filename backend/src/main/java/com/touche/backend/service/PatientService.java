package com.touche.backend.service;

import com.touche.backend.domain.Patient;
import com.touche.backend.dto.PatientDTO;
import com.touche.backend.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;

    @Transactional
    public Patient createPatient(PatientDTO dto) {
        Patient newPatient = toPatientModel(dto);
        return patientRepository.save(newPatient);
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(long id) {
        return patientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Patient with id='%d' not found!".formatted(id)));
    }

    private static Patient toPatientModel(final PatientDTO dto) {
        return new Patient();
    }
}
