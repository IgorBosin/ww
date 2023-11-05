import { CurrenciesDto } from './types';

import { mapCurrencies } from '../lib/mapCurrencies';
import { Currency } from '../model/types';

import { CURRENCIES_TAG, baseApi } from 'shared/api';

export const currenciesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    currencies: build.query<Currency[], void>({
      query: () => ({
        url: `/symbols`,
      }),
      transformResponse: (response: CurrenciesDto) => mapCurrencies(response),
      providesTags: [CURRENCIES_TAG],
    }),
  }),
});

export const { useCurrenciesQuery } = currenciesApi;
