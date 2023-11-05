import { ExchangeRatesDto, ExchangeRatesParams } from './types';

import { mapExchangeRates } from '../lib/mapExchangeRates';
import { ExchangeRate } from '../model/types';

import { EXCHANGE_TAG, baseApi } from 'shared/api';

export const exchangeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    exchangeRates: build.query<ExchangeRate[], ExchangeRatesParams>({
      query: (params) => ({
        url: `/${params.date}?base=${params.base}`,
      }),
      transformResponse: (response: ExchangeRatesDto) => mapExchangeRates(response),
      providesTags: [EXCHANGE_TAG],
    }),
  }),
});

export const { useLazyExchangeRatesQuery } = exchangeApi;
