package com.touche.backend.domain;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.Instant;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "patients")
public class Patient {

    public enum CancerType {
        CRANIOSPINAL("CRANIOSPINAL"),
        BREAST("BREAST"),
        BREAST_SPECIAL("BREAST SPECIAL"),
        HEAD_AND_NECK("HEAD & NECK"),
        ABDOMEN("ABDOMEN"),
        PELVIS("PELVIS"),
        CRANE("CRANE"),
        LUNG("LUNG"),
        LUNG_SPECIAL("LUNG SPECIAL"),
        WHOLE_BRAIN("WHOLE BRAIN");

        private final String value;

        CancerType(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @NotBlank
    private String firstName;

    @NonNull
    @NotBlank
    private String lastName;

    @NonNull
    @NotBlank
    @Email
    @Column(unique = true)
    private String email;

    @CreationTimestamp
    private Instant createdAt;

    @Enumerated(EnumType.STRING)
    private CancerType cancerType;

    // urgency
    // fraction number
}
