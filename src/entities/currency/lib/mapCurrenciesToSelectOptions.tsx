import { Currency } from '../model/types';

import { SelectOption } from 'shared/ui/components';

const mapCurrencyToSelectOption = (currency: Currency): SelectOption => ({
  label: `${currency.flag} ${currency.code}`,
  value: currency.code,
});

export const mapCurrenciesToSelectOptions = (currencies: Currency[]): SelectOption[] =>
  currencies?.map(mapCurrencyToSelectOption);
