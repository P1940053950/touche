package com.touche.backend.dto;

import com.touche.backend.domain.Appointment;
import com.touche.backend.domain.CancerType;
import com.touche.backend.domain.Patient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PatientDTO {

    private long id;
    private String name;
    private String email;
    private String phone;
    private Date createdAt;
    private CancerType cancerType;
    private List<Appointment> appointmentList;

    public PatientDTO(Patient patient) {
        this.id = patient.getId();
        this.name = patient.getName();
        this.email = patient.getEmail();
        this.phone = patient.getPhone();
        this.createdAt = patient.getCreatedAt();
        this.cancerType = patient.getCancerType();
        this.appointmentList = patient.getAppointments();
    }
}
