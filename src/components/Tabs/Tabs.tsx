import React, { FC, ReactNode, useState, useMemo, useCallback } from 'react';
import { TabListContext, TabPanelContext } from './context';

export interface ITabsProps {
  id: string;
  children: ReactNode;
  testId?: string;
}

export const Tabs: FC<ITabsProps> = ({ id, children, testId }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  // with this API we expect the first child to be a list of tabs
  // followed by a list of tab panels that correspond to those tabs
  // the ordering is determined by the position of the elements
  // that are passed in as children
  const [tabList, ...tabPanels] = useMemo(() => childrenArray, [childrenArray]);

  const onTabChange = useCallback((index: number) => {
    setSelectedTabIndex(index);
  }, []);

  return (
    <div id={id} data-testId={testId}>
      <TabListContext.Provider value={{ selected: selectedTabIndex, onTabChange, tabsId: id }}>
        {tabList}
      </TabListContext.Provider>
      <TabPanelContext.Provider
        value={{
          role: 'tabpanel',
          id: `${id}-${selectedTabIndex}-tab`,
          'aria-labelledby': `${id}-${selectedTabIndex}`,
        }}
      >
        {tabPanels[selectedTabIndex]}
      </TabPanelContext.Provider>
    </div>
  );
};
