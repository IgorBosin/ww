import { ExchangeRatesDto } from '../api/types';
import { ExchangeRate } from '../model/types';

import { getEmojiByCurrencyCode } from 'shared/lib/getEmojiByCurrencyCode';

export const mapExchangeRates = (dto: ExchangeRatesDto): ExchangeRate[] =>
  Object.keys(dto.rates)
    ?.filter((code) => code !== dto.base)
    ?.map((code) => ({ code, flag: getEmojiByCurrencyCode(code), value: dto.rates[code] }));
