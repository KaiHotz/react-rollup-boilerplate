import React, { FC, ReactNode } from 'react';
import cx from 'clsx';

import { useTab } from './context';
import './Tab.scss';

export interface ITabProps {
  children: ReactNode;
}

export const Tab: FC<ITabProps> = ({ children }) => {
  const tabAttributes = useTab();

  return (
    <div {...tabAttributes} className={cx('tab', { 'tab--active': tabAttributes['aria-selected'] })}>
      {children}
    </div>
  );
};
