import cn from 'classnames';
import debounce from 'lodash.debounce';
import { FC, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import styles from './CurrencyConverterForm.module.scss';

import { CurrencyConverterFormData } from '../model/types';

import { useLazyConvertCurrencyQuery } from 'entities/convert';
import { integerNumberMask } from 'shared/lib/masks';
import { Input, Select, SelectOption } from 'shared/ui/components';

export interface CurrencyConverterFormProps {
  options: SelectOption[];
}

const DEFAULT_VALUES = {
  from: 'USD',
  to: 'EUR',
};

export const CurrencyConverterForm: FC<CurrencyConverterFormProps> = ({ options }) => {
  const [convertCurrency, convertResult] = useLazyConvertCurrencyQuery();
  const isLoading = convertResult.isFetching || convertResult.isLoading;

  const { handleSubmit, register, watch } = useForm<CurrencyConverterFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    const onSubmit = (data: CurrencyConverterFormData) => convertCurrency(data);
    const subscription = watch(debounce(() => handleSubmit(onSubmit)(), 1000));

    return () => subscription.unsubscribe();
  }, [convertCurrency, handleSubmit, watch]);

  return (
    <form className={cn(styles.form)}>
      <div className={cn(styles.field)}>
        <Input
          disabled={isLoading}
          label='Меняю'
          mask={integerNumberMask}
          placeholder='0'
          {...register('amount', { required: true })}
        />

        <Select
          disabled={isLoading}
          options={options}
          {...register('from')}
        />
      </div>

      <div className={cn(styles.field)}>
        <Input
          disabled={isLoading}
          isLoading={isLoading}
          label='Получаю'
          placeholder='0'
          readOnly={true}
          value={convertResult.data ?? ''}
        />

        <Select
          disabled={isLoading}
          options={options}
          {...register('to')}
        />
      </div>
    </form>
  );
};
