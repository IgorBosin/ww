import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Footer.module.scss';

interface FooterProps {
  children: ReactNode;
  className?: string;
}

export const Footer: FC<FooterProps> = ({ children, className }) => (
  <footer className={cn(className, styles.footer)}>{children}</footer>
);
