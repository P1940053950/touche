package com.touche.backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room_reservation")
public class RoomReservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private Date startDate;

    private Date endDate;

    @OneToMany(mappedBy = "roomReservation", fetch = FetchType.LAZY)
    private List<Patient> patients = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY)
    private Room room;
}
