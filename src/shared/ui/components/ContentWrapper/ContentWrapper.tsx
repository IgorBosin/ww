import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './ContentWrapper.module.scss';

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ContentWrapper: FC<ContentWrapperProps> = ({ children, className }) => (
  <div className={cn(className, styles['content-wrapper'])}>{children}</div>
);
