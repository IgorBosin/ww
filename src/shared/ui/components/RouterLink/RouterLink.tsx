import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import styles from './RouterLink.module.scss';

interface RouterLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const RouterLink: FC<RouterLinkProps> = ({ children, className, to, ...props }) => (
  <NavLink
    className={cn(className, styles.link)}
    to={to}
    {...props}
  >
    {children}
  </NavLink>
);
