// import getBinanceData from 'binance-history-downloader'; https://www.npmjs.com/package/binance-history-downloader?activeTab=readme
import { getKline, Kline } from 'binance-historical'; //  https://classic.yarnpkg.com/en/package/binance-historical
import cn from 'classnames';

import { useMemo } from 'react';

import styles from './CurrencyConverter.module.scss';

import { mapCurrenciesToSelectOptions, useCurrenciesQuery } from 'entities/currency';
import { Card } from 'shared/ui/components';

export const CurrencyConverter = () => {
  const { data: currencies, isLoading, error } = useCurrenciesQuery();
  const options = useMemo(() => mapCurrenciesToSelectOptions(currencies), [currencies]);

  const foo = async () => {
    const result: Array<Kline> = await getKline('ETHUSDT', '4h', new Date('01-09-2020'), new Date('01-12-2021'));

    // eslint-disable-next-line no-console
    console.log(result);
  };

  return (
    <Card className={cn(styles.card)}>
      <button onClick={foo}>test</button>
    </Card>
  );
};
