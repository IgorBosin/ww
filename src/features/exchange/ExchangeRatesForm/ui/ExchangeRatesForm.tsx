import cn from 'classnames';

import { FC } from 'react';

import { useFormContext } from 'react-hook-form';

import styles from './ExchangeRatesForm.module.scss';

import { getCurrentDate } from 'shared/lib/date';
import { Input, Select, SelectOption } from 'shared/ui/components';

export interface ExchangeRatesFormProps {
  options: SelectOption[];
  isLoading: boolean;
}

export const ExchangeRatesForm: FC<ExchangeRatesFormProps> = ({ options, isLoading }) => {
  const { register } = useFormContext();

  return (
    <form className={cn(styles.form)}>
      <Select
        disabled={isLoading}
        options={options}
        {...register('base')}
      />

      <Input
        disabled={isLoading}
        isLoading={isLoading}
        max={getCurrentDate()}
        min='2000-01-01'
        type='date'
        {...register('date', { required: true })}
      />
    </form>
  );
};
