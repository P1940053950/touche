package com.touche.backend.domain;

import com.touche.backend.domain.descriptor.MachineType;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "machine")
public class Machine {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private MachineType machineType;

    @OneToMany(mappedBy = "machine", fetch = FetchType.LAZY)
    private List<Appointment> appointments = new ArrayList<>();
}
