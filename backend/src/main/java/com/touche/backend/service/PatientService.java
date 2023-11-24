package com.touche.backend.service;

import com.touche.backend.repository.PatientRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional(readOnly = true)
@AllArgsConstructor
public class PatientService {
    private final PatientRepository patientRepository;
}
