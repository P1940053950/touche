package com.touche.backend.controller;

import com.touche.backend.domain.Machine;
import com.touche.backend.domain.Machine;
import com.touche.backend.dto.MachineDTO;
import com.touche.backend.dto.MachineDTO;
import com.touche.backend.service.MachineService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/machine")
public class MachineController {
    
    //    @Autowired
//    private Something;
    
    private final MachineService machineService;

    @PostMapping(path = "/sadfsafd")
    public ResponseEntity<?> get() {
        return ResponseEntity.ok(new Object());
    }

    @GetMapping
    public List<MachineDTO> findAllMachines() {
        List<Machine> existedMachines = machineService.getAllMachines();
        return existedMachines.stream()
                .map(this::toMachineDTO)
                .collect(Collectors.toList());
    }

    @GetMapping(path = "/{id}")
    public MachineDTO findMachineById(@PathVariable(name = "id") long id) {
        Machine existedMachine = machineService.getMachineById(id);
        return toMachineDTO(existedMachine);
    }

    private MachineDTO toMachineDTO(final Machine machine) {
        return new MachineDTO(
                machine.getId(),
                machine.getMachineType(),
                machine.getAppointments(),
                machine.getCancerTypes()
        );
    }
}
