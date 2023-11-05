import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CONVERT_TAG, CURRENCIES_TAG, EXCHANGE_TAG } from './tags';

import { API_ENDPOINT, API_KEY } from 'shared/lib/config';

export const baseApi = createApi({
  tagTypes: [CURRENCIES_TAG, CONVERT_TAG, EXCHANGE_TAG],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
    prepareHeaders: (headers) => {
      headers.set('apikey', `${API_KEY}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
