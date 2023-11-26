import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    fetchPatients: builder.query({
      query: (limit: number) => `patients?limit=${limit}`,
    }),
  }),
});

export const { useFetchPatientsQuery } = api;
