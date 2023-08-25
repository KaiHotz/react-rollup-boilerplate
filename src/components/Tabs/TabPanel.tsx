import React, { FC, ReactNode } from 'react';

import { useTabPanel } from './context';
import './TabPanel.scss';

export interface ITabPanelProps {
  children: ReactNode;
}

export const TabPanel: FC<ITabPanelProps> = ({ children }) => {
  const tabPanelAttributes = useTabPanel();

  return (
    <div {...tabPanelAttributes} className="tab-panel">
      {children}
    </div>
  );
};
