package com.touche.backend.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "machines")
public class Machine {

    public enum MachineType {
        TB1("TB1"),
        TB2("TB2"),
        VB1("VB1"),
        VB2("VB2"),
        U("U");

        private final String value;

        MachineType(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private Patient.CancerType cancerType;

    @Enumerated(EnumType.STRING)
    private MachineType machineType;

    @OneToMany
    private Appointment[] appointments;
}
