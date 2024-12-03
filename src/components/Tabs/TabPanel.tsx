import { FC, PropsWithChildren } from 'react';

import { useTabPanel } from './context';
import './TabPanel.scss';

export const TabPanel: FC<PropsWithChildren> = ({ children }) => {
  const tabPanelAttributes = useTabPanel();

  return (
    <div {...tabPanelAttributes} className="tab-panel">
      {children}
    </div>
  );
};
