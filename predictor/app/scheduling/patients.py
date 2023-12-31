import random
import uuid
from typing import Generator, List, Optional

from faker import Faker

from scheduling.diseases import Cancer, CANCER_MAP
from scheduling.diseases import (
    Craniospinal,
    Breast,
    BreastSpecial,
    HeadNeck,
    Abdomen,
    Pelvis,
    Crane,
    Lung,
    LungSpecial,
    WholeBrain,
)
from server.models import MakeAppointmentRequest


_FAKER = Faker()


class InvalidFractionTime(Exception):
    def __init__(self, fraction_time, available_fractions: List[int]):
        super().__init__(
            f"Fraction time {fraction_time} is invalid. "
            f"Available fraction times: [ {', '.join(str(i) for i in available_fractions)} ]"
        )


class Patient:
    def to_dict(self):
        return {
            "name": self.name,
            "fraction_time_days": self.fraction_time_days,
            "cancer": self.cancer.to_dict(),
        }

    def __str__(self):
        return f"{self.__class__.__name__}(name='{self.name}', cancer={self.cancer})"

    def __repr__(self):
        return self.__str__()

    def __init__(self, name: Optional[str], cancer: Cancer):
        super().__init__()
        self.name = name or str(_FAKER.name())
        self.cancer = cancer
        self.fraction_time_days = None

    def assign_random_fraction_time(self):
        self.fraction_time_days = random.choice(self.cancer.fraction_time())
        return self.fraction_time_days

    @classmethod
    def from_model(cls, model: MakeAppointmentRequest):
        cancer = CANCER_MAP[model.cancer_type]()
        if model.fraction_time not in cancer.fraction_time():
            raise InvalidFractionTime(model.fraction_time, cancer.fraction_time())

        patient = cls(name=model.name, cancer=cancer)
        patient.fraction_time_days = model.fraction_time
        return patient


class PatientGen:

    cancers = [
        Craniospinal,
        Breast,
        BreastSpecial,
        HeadNeck,
        Abdomen,
        Pelvis,
        Crane,
        Lung,
        LungSpecial,
        WholeBrain,
    ]

    def get_patient(self) -> Generator[Patient, None, None]:
        while True:
            cancer = random.choices(
                self.cancers, weights=[cancer.probability() for cancer in self.cancers]
            )[0]
            yield Patient(name=None, cancer=cancer())
