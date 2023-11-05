import { CurrenciesDto } from '../api/types';
import { Currency } from '../model/types';

import { getEmojiByCurrencyCode } from 'shared/lib/getEmojiByCurrencyCode';

export const mapCurrencies = (dto: CurrenciesDto): Currency[] =>
  Object.keys(dto.symbols)?.map((code) => ({ code, flag: getEmojiByCurrencyCode(code) }));
