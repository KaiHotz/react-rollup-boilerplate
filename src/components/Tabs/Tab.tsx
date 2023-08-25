import React, { FC, PropsWithChildren } from 'react';
import cx from 'clsx';

import { useTab } from './context';
import './Tab.scss';

export const Tab: FC<PropsWithChildren> = ({ children }) => {
  const tabAttributes = useTab();

  return (
    <div {...tabAttributes} className={cx('tab', { 'tab--active': tabAttributes['aria-selected'] })}>
      {children}
    </div>
  );
};
