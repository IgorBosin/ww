import { useMemo, useState } from 'react';

import { ExchangeRate } from '../model/types';

import { SORT_TYPE, alphabeticalSort } from 'shared/lib/alphabeticalSort';

export const useSortExchangeRatesByCode = (exchangeRates: ExchangeRate[]) => {
  const [sortType, setSortType] = useState<SORT_TYPE>(SORT_TYPE.ascending);

  const sortedExchangeRates = useMemo(() => {
    if (exchangeRates && exchangeRates.length > 0) {
      const arr = [...exchangeRates];

      return arr.sort((a, b) => alphabeticalSort[sortType](a?.code, b?.code));
    }
  }, [exchangeRates, sortType]);

  return { sortType, setSortType, sortedExchangeRates };
};
