import cn from 'classnames';

import styles from './Header.module.scss';

import { ContentWrapper, RouterLink } from 'shared/ui/components';

export const Header = () => (
  <nav className={cn(styles.wrapper)}>
    <ContentWrapper className={cn(styles.content)}>
      <RouterLink to='/'>Конвертер валют</RouterLink>
      <RouterLink to='/exchange-rates'>Курсы валют</RouterLink>
    </ContentWrapper>
  </nav>
);
