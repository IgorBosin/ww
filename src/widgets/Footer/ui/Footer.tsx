import cn from 'classnames';

import styles from './Footer.module.scss';

import { ContentWrapper } from 'shared/ui/components';

export const Footer = () => (
  <div className={cn(styles.wrapper)}>
    <ContentWrapper className={cn(styles.content)}>
      <p>sanarovsashqa</p>
    </ContentWrapper>
  </div>
);
