package com.touche.backend.domain;

import com.touche.backend.domain.descriptor.MachineType;
import jakarta.persistence.*;

@Entity
@Table(name = "machine")
public class Machine {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @Enumerated(EnumType.STRING)
//    private CancerType cancerType;

    @Enumerated(EnumType.STRING)
    private MachineType machineType;

//    @OneToMany
//    private Appointment[] appointments;
}
