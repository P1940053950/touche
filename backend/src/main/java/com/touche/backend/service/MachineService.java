package com.touche.backend.service;

import com.touche.backend.domain.Machine;
import com.touche.backend.repository.MachineRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MachineService {
    private final MachineRepository machineRepository;

    public List<Machine> getAllMachines() {
        return machineRepository.findAll();
    }

    public Machine getMachineById(long id) {
        return machineRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Machine with id='%d' not found!".formatted(id)));
    }

}
