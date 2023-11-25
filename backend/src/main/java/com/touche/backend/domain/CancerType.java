package com.touche.backend.domain;

import com.touche.backend.domain.descriptor.CancerName;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cancer_type")
public class CancerType {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Enumerated(EnumType.STRING)
        private CancerName name;

        private Double avgFactionTime;

        // TODO: store all fraction number
        private Double fractionNumber;

        @OneToMany(mappedBy = "cancerType", fetch = FetchType.LAZY)
        private List<Patient> patients = new ArrayList<>();

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "machine_id")
        private Machine machine;

        @ManyToMany(mappedBy = "cancerTypes")
        private Set<Machine> machines = new HashSet<>();

}
