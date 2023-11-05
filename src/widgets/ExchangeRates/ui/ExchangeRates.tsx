import cn from 'classnames';

import debounce from 'lodash.debounce';
import { useCallback, useEffect, useMemo } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import styles from './ExchangeRates.module.scss';

import { mapCurrenciesToSelectOptions, useCurrenciesQuery } from 'entities/currency';
import { ExchangeRatesTable, useLazyExchangeRatesQuery } from 'entities/exchange';
import { ExchangeRatesForm, ExchangeRatesFormData } from 'features/exchange/ExchangeRatesForm';
import { getCurrentDate } from 'shared/lib/date';
import { rtkErrorToMessage } from 'shared/lib/rtkErrorToMessage';
import { Card, Loader } from 'shared/ui/components';

export const DEFAULT_VALUES = {
  base: 'USD',
  date: getCurrentDate(),
};

export const ExchangeRates = () => {
  const { data: currencies, isLoading, error } = useCurrenciesQuery();
  const options = useMemo(() => mapCurrenciesToSelectOptions(currencies), [currencies]);

  const [getExchangeRates, exchangeRates] = useLazyExchangeRatesQuery();
  const isExchangeLoading = exchangeRates.isFetching || exchangeRates.isLoading;

  const { handleSubmit, watch, setValue, ...methods } = useForm<ExchangeRatesFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    getExchangeRates(DEFAULT_VALUES);
  }, [getExchangeRates]);

  useEffect(() => {
    const onSubmit = (data: ExchangeRatesFormData) => getExchangeRates(data);
    const subscription = watch(debounce(() => handleSubmit(onSubmit)(), 1000));

    return () => subscription.unsubscribe();
  }, [getExchangeRates, handleSubmit, watch]);

  const setBaseCurrency = useCallback(
    (code: string) => {
      setValue('base', code);
    },
    [setValue],
  );

  return (
    <Card className={cn(styles.card)}>
      {error ? (
        <p>{rtkErrorToMessage(error)}</p>
      ) : (
        <>
          {isLoading ? (
            <div className={cn(styles['loader-wrapper'])}>
              <Loader />
            </div>
          ) : (
            <>
              <div className={styles['form-wrapper']}>
                <FormProvider {...{ handleSubmit, watch, setValue, ...methods }}>
                  <ExchangeRatesForm
                    isLoading={isExchangeLoading}
                    options={options}
                  />
                </FormProvider>
              </div>

              <div className={styles['table-wrapper']}>
                <ExchangeRatesTable
                  exchangeRates={exchangeRates?.data}
                  isLoading={isExchangeLoading}
                  setBaseCurrency={setBaseCurrency}
                />
              </div>
            </>
          )}
        </>
      )}
    </Card>
  );
};
