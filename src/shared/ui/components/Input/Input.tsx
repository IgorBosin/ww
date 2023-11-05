import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';
import InputMask from 'react-input-mask';

import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  mask?: string | (string | RegExp)[];
  isLoading?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { isLoading, label, mask, ...inputProps } = props;

  const inputClassName = cn(styles.input, 'text-xl', 'text-bold');

  return (
    <label className={cn(styles.label)}>
      <span className='text-sm'>{label}</span>

      {mask ? (
        <InputMask
          mask={mask}
          maskPlaceholder={null}
          {...inputProps}
        >
          <input
            className={inputClassName}
            ref={ref}
          />
        </InputMask>
      ) : (
        <input
          className={inputClassName}
          ref={ref}
          {...inputProps}
        />
      )}

      {isLoading && (
        <div className={cn(styles['loader-wrapper'])}>
          <div className={cn(styles.loader)} />
        </div>
      )}
    </label>
  );
});
