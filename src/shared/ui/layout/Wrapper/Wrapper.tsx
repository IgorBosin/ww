import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Wrapper.module.scss';

export interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper: FC<WrapperProps> = ({ children, className }) => (
  <section className={cn(className, styles.wrapper)}>{children}</section>
);
