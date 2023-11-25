INSERT INTO cancer_type (name, avg_faction_time, fraction_number) VALUES
                                                                      ('CRANIOSPINAL', 20, 30),
                                                                      ('BREAST', 19, 12),
                                                                      ('BREAST_SPECIAL', 15, 20),
                                                                      ('HEAD_AND_NECK', 5, 12),
                                                                      ('ABDOMEN', 18, 12),
                                                                      ('PELVIS', 25, 12),
                                                                      ('CRANE', 13, 10),
                                                                      ('LUNG', 20, 12),
                                                                      ('LUNG_SPECIAL', 5, 15),
                                                                      ('WHOLE_BRAIN', 10, 10);

INSERT INTO machine (id, machine_type) VALUES
                                      (1, 'TB1'),
                                      (2, 'TB2'),
                                      (3, 'VB1'),
                                      (4, 'VB2'),
                                      (5, 'U');

INSERT INTO room (id, name) VALUES (1, 'firstRoom'), (2, 'secondRoom'), (3, 'thirdRoom');

INSERT INTO room_reservation (end_date, room_id, start_date)
VALUES
    ('2023-11-25 15:00:00', 1, '2023-11-25 12:00:00'),
    ('2023-11-26 14:30:00', 2, '2023-11-26 10:00:00'),
    ('2023-11-27 16:45:00', 3, '2023-11-27 13:30:00');

INSERT INTO patient (cancer_type_id, created_at, room_reservation_id, email, name, phone)
VALUES
    (35,CURRENT_TIMESTAMP, 1, 'john.doe@example.com', 'John Doe','+1-555-1234'),
    (32, CURRENT_TIMESTAMP, 2, 'ivan.ivanov@example.com', 'Ivan Ivanov', '8-800-555-35-35'),
    (33, CURRENT_TIMESTAMP, 1, 'jane.doe@example.com', 'Jane Doe', '+1-555-9876'),
    (37, CURRENT_TIMESTAMP, 3, 'alex.smith@example.com', 'Alex Smith', '+1-555-1234'),
    (34, CURRENT_TIMESTAMP, 2, 'lisa.jones@example.com', 'Lisa Jones', '+1-555-5678');

INSERT INTO machine_cancer_type (cancer_type_id, machine_id) VALUES
                                                                 (35, 1),
                                                                 (38, 2),
                                                                 (33, 3),
                                                                 (37, 4),
                                                                 (31, 5),
                                                                 (34, 1);

INSERT INTO appointment (duration, date, id, machine_id, patient_id) VALUES
(20, '2023-11-25 15:00:00', 1, 1, 12),
(30, '2023-11-26 12:00:00', 2, 2, 13),
(25, '2023-11-27 11:00:00', 3, 3, 14),
(20, '2023-11-28 10:00:00', 4, 4, 15),
(30, '2023-11-26 17:00:00', 5, 5, 16);