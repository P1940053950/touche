export interface AnnotationData {
  x: number;
  y: number;
  width: number;
  height: number;
  occupiedPlaces: number;
  freePlaces: number;
  id: number;
  users: string[];
}

export interface User {
  name: string;
  fraction_time_days: number;
  cancer: {
    name: string;
    fraction_times: number[];
    probability: number;
    treatment_time_minutes: number;
  };
  } 
}

export interface SchedulerDataPoint {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  machine: string;
}

export type SchedulerDataArray = Array<SchedulerDataPoint>;
