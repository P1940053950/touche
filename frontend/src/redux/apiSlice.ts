import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    fetchPatients: builder.query({
      query: (limit: number) => `patients?limit=${limit}`,
    }),
    schedulePatient: builder.mutation({
      query: ({ name, cancerType, fractionTime, isUrgent }) => ({
        url: '/schedule',
        method: 'POST',
        body: {
          name,
          cancer_type: cancerType,
          fraction_time: fractionTime,
          is_urgent: isUrgent,
        },
      }),
    }),
  }),
});

export const { useFetchPatientsQuery, useSchedulePatientMutation } = api;
