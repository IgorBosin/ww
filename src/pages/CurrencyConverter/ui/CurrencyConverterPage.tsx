import cn from 'classnames';

import styles from './CurrencyConverterPage.module.scss';

import { ContentWrapper } from 'shared/ui/components';
import { CurrencyConverter } from 'widgets/CurrencyConverter';

export const CurrencyConverterPage = () => (
  <ContentWrapper className={cn(styles.content)}>
    <CurrencyConverter />
  </ContentWrapper>
);
