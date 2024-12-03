import { FC, PropsWithChildren } from 'react';
import cx from 'clsx';

import { useTab } from './context';
import './Tab.scss';

export const Tab: FC<PropsWithChildren<{ id?: string }>> = ({ children, id }) => {
  const tabAttributes = useTab();

  return (
    <div {...tabAttributes} id={id} className={cx('tab', { 'tab--active': tabAttributes['aria-selected'] })}>
      {children}
    </div>
  );
};
