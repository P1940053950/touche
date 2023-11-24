package com.touche.backend.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patient")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String phone;

    private Date createdAt;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "cancer_type_id", nullable = false)
//    private CancerType cancerType;

//    @OneToMany(mappedBy = "patient", fetch = FetchType.LAZY)
//    private List<Appointment> appointments = new ArrayList<>();

   // urgency
    // fraction number
}
