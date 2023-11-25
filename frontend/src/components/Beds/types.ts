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
  id: string;
  label: string;
  value: string;
  phoneNumber: string;
  email: string;
  cancerType: string;
}

export interface SchedulerDataPoint {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  machine: string;
}

export type SchedulerDataArray = Array<SchedulerDataPoint>;
