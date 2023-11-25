package com.touche.backend.dto;

import com.touche.backend.domain.Appointment;
import com.touche.backend.domain.Machine;
import com.touche.backend.domain.Patient;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private long id;
    private Integer duration;
    private Patient patient;
    private Machine machine;
    private Date date;
    private Date startDate;
    private Date endDate;

    public AppointmentDTO(Appointment appointment) {
        this.id = appointment.getId();
        this.duration = appointment.getDuration();
        this.patient = appointment.getPatient();
        this.machine = appointment.getMachine();
        this.date = appointment.getDate();
        this.startDate = appointment.getStartDate();
        this.endDate = appointment.getEndDate();
    }
}
