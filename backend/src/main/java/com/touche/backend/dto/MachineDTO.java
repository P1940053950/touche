package com.touche.backend.dto;

import com.touche.backend.domain.Appointment;
import com.touche.backend.domain.CancerType;
import com.touche.backend.domain.Machine;
import com.touche.backend.domain.descriptor.MachineType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MachineDTO {

    private long id;
    private MachineType machineType;
    private List<Appointment> appointmentList;
    private Set<CancerType> cancerTypes;

    public MachineDTO(Machine machine) {
        this.id = machine.getId();
        this.machineType = machine.getMachineType();
        this.appointmentList = machine.getAppointments();
        this.cancerTypes = machine.getCancerTypes();
    }
}
