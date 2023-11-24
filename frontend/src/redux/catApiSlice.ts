import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/' }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: () => 'images/search',
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;
