create table machine
(
    id           bigserial
        primary key,
    machine_type varchar(255)
        constraint machine_machine_type_check
            check ((machine_type)::text = ANY
        ((ARRAY ['TB1'::character varying, 'TB2'::character varying, 'VB1'::character varying, 'VB2'::character varying, 'U'::character varying])::text[]))
    );

alter table machine
    owner to touche;

create table cancer_type
(
    avg_faction_time double precision,
    fraction_number  double precision,
    id               bigserial
        primary key,
    machine_id       bigint
        constraint fkoyutswrc26nem78w832j47978
            references machine,
    name             varchar(255)
        constraint cancer_type_name_check
            check ((name)::text = ANY
        ((ARRAY ['CRANIOSPINAL'::character varying, 'BREAST'::character varying, 'BREAST_SPECIAL'::character varying, 'HEAD_AND_NECK'::character varying, 'ABDOMEN'::character varying, 'PELVIS'::character varying, 'CRANE'::character varying, 'LUNG'::character varying, 'LUNG_SPECIAL'::character varying, 'WHOLE_BRAIN'::character varying])::text[]))
    );

alter table cancer_type
    owner to touche;

create table machine_cancer_type
(
    cancer_type_id bigint not null
        constraint fkr1kh0d91jsm7ssr68t5ii2aj9
            references cancer_type,
    machine_id     bigint not null
        constraint fk4kjfkwq6jr3f4vwqpwij9je9q
            references machine,
    primary key (cancer_type_id, machine_id)
);

alter table machine_cancer_type
    owner to touche;

create table room
(
    id   bigserial
        primary key,
    name varchar(255)
);

alter table room
    owner to touche;

create table room_reservation
(
    end_date   timestamp(6),
    id         bigserial
        primary key,
    room_id    bigint
        unique
        constraint fk19p6c3un3mbs7b7bxkcxk8xn2
            references room,
    start_date timestamp(6)
);

alter table room_reservation
    owner to touche;

create table patient
(
    cancer_type_id      bigint not null
        constraint fk2pm694u9x8u0r1ry4ywbmwp7c
            references cancer_type,
    created_at          timestamp(6),
    id                  bigserial
        primary key,
    room_reservation_id bigint not null
        constraint fks5fyig9xh3tkpr19yf9733ftq
            references room_reservation,
    email               varchar(255),
    name                varchar(255),
    phone               varchar(255)
);

alter table patient
    owner to touche;

create table appointment
(
    duration   integer,
    date       timestamp(6),
    id         bigserial
        primary key,
    machine_id bigint not null
        constraint fk3f0xddtmlvpofv29iwyyt4bhm
            references machine,
    patient_id bigint not null
        constraint fk4apif2ewfyf14077ichee8g06
            references patient
);

alter table appointment
    owner to touche;

