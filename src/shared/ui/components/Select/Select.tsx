import cn from 'classnames';
import { SelectHTMLAttributes, forwardRef } from 'react';

import styles from './Select.module.scss';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(props, ref) {
  const { options, ...selectProps } = props;

  return (
    <div className={cn(styles.select)}>
      <select
        className='text-lg text-bold'
        ref={ref}
        {...selectProps}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
