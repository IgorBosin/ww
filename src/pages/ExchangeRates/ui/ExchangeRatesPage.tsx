import cn from 'classnames';

import styles from './ExchangeRatesPage.module.scss';

import { ContentWrapper } from 'shared/ui/components';
import { ExchangeRates } from 'widgets/ExchangeRates';

export const ExchangeRatesPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <ExchangeRates />
  </ContentWrapper>
);
