import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './Content.module.scss';

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export const Content: FC<ContentProps> = ({ children, className }) => (
  <main className={cn(className, styles.content)}>{children}</main>
);
