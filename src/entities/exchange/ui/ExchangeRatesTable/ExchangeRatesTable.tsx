import cn from 'classnames';
import { FC } from 'react';

import styles from './ExchangeRatesTable.module.scss';

import { useSortExchangeRatesByCode } from '../../lib/useSortExchangeRatesByCode';
import { ExchangeRate } from '../../model/types';

import { SORT_TYPE } from 'shared/lib/alphabeticalSort';

interface ExchangeRatesTableProps {
  exchangeRates: ExchangeRate[];
  isLoading: boolean;
  setBaseCurrency: (code: string) => void;
}

export const ExchangeRatesTable: FC<ExchangeRatesTableProps> = ({ exchangeRates, isLoading, setBaseCurrency }) => {
  const { sortType, sortedExchangeRates, setSortType } = useSortExchangeRatesByCode(exchangeRates);

  const onHeadClick = () => {
    setSortType(sortType === SORT_TYPE.ascending ? SORT_TYPE.descending : SORT_TYPE.ascending);
  };

  return (
    <table className={cn(styles.table)}>
      <thead className={cn(styles.head)}>
        <tr>
          <th className={cn(styles['head-cell'], styles['with-button'])}>
            <button
              className={cn(styles.button)}
              onClick={onHeadClick}
            >
              Код <span className={cn(styles.icon, styles[sortType])} />
            </button>
          </th>
          <th className={cn(styles['head-cell'])}>Курс</th>
        </tr>
      </thead>

      <tbody>
        {sortedExchangeRates?.map((rate) => (
          <tr key={rate.code}>
            <td className={cn(styles.cell, styles['with-button'])}>
              <button
                className={cn(styles.button)}
                disabled={isLoading}
                onClick={() => setBaseCurrency(rate.code)}
              >
                {`${rate.flag} ${rate.code}`}
              </button>
            </td>

            <td className={cn(styles.cell)}>{rate.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
