from enum import Enum

CRANIOSPINAL = "craniospinal"
BREAST = "breast"
BREAST_SPECIAL = "breast_special"
HEAD_NECK = "head_neck"
ABDOMEN = "abdomen"
PELVIS = "pelvis"
CRANE = "crane"
LUNG = "lung"
LUNG_SPECIAL = "lung_special"
WHOLE_BRAIN = "whole_brain"

CANCER_TYPES = [
    CRANIOSPINAL,
    BREAST,
    BREAST_SPECIAL,
    HEAD_NECK,
    ABDOMEN,
    PELVIS,
    CRANE,
    LUNG,
    LUNG_SPECIAL,
    WHOLE_BRAIN,
]

CRANIOSPINAL_PROBABILITY = 0.01
BREAST_PROBABILITY = 0.25
BREAST_SPECIAL_PROBABILITY = 0.05
HEAD_NECK_PROBABILITY = 0.10
ABDOMEN_PROBABILITY = 0.10
PELVIS_PROBABILITY = 0.18
CRANE_PROBABILITY = 0.04
LUNG_PROBABILITY = 0.12
LUNG_SPECIAL_PROBABILITY = 0.05
WHOLE_BRAIN_PROBABILITY = 0.10

CRANIOSPINAL_FRACTION_NUMBER = [13, 17, 20, 30]
BREAST_FRACTION_NUMBER = [15, 19, 25, 30]
BREAST_SPECIAL_FRACTION_NUMBER = [15, 19, 25, 30]
HEAD_NECK_FRACTION_NUMBER = [5, 10, 15, 25, 30, 33, 35]
ABDOMEN_FRACTION_NUMBER = [1, 3, 5, 8, 10, 12, 15, 18, 20, 30]
PELVIS_FRACTION_NUMBER = [1, 3, 5, 10, 15, 22, 23, 25, 28, 35]
CRANE_FRACTION_NUMBER = [1, 5, 10, 13, 25, 30]
LUNG_FRACTION_NUMBER = [1, 5, 10, 15, 20, 25, 30, 33]
LUNG_SPECIAL_FRACTION_NUMBER = [3, 5, 8]
WHOLE_BRAIN_FRACTION_NUMBER = [5, 10, 12]

MACHINE_TB1 = "TB1"
MACHINE_TB2 = "TB2"
MACHINE_VB1 = "VB1"
MACHINE_VB2 = "VB2"
MACHINE_U = "U"

MACHINE_TYPES = [
    MACHINE_TB1,
    MACHINE_TB2,
    MACHINE_VB1,
    MACHINE_VB2,
    MACHINE_U,
]

YEAR_LEN_DAYS = 356
TWO_YEAR_LEN_DAYS = YEAR_LEN_DAYS * 2
