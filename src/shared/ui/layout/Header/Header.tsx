import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ children, className }) => (
  <header className={cn(className, styles.header)}>{children}</header>
);
