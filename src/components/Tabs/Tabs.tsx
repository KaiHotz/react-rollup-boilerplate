import { Children, FC, ReactNode, useCallback, useMemo } from 'react';

import { TabListContext, TabPanelContext } from './context';

export interface ITabsProps {
  children: ReactNode;
  id?: string;
  testId?: string;
  selected: number;
  setSelected: (idx: number) => void;
}

export const Tabs: FC<ITabsProps> = ({ id = 'tabs', children, testId, selected, setSelected }) => {
  const childrenArray = Children.toArray(children);
  // with this API we expect the first child to be a list of tabs
  // followed by a list of tab panels that correspond to those tabs
  // the ordering is determined by the position of the elements
  // that are passed in as children
  const [tabList, ...tabPanels] = useMemo(() => childrenArray, [childrenArray]);

  const onTabChange = useCallback(
    (index: number) => {
      setSelected(index);
    },
    [setSelected],
  );

  return (
    <div id={id} data-testId={testId}>
      <TabListContext value={{ selected, onTabChange, tabsId: id }}>{tabList}</TabListContext>
      <TabPanelContext
        value={{
          role: 'tabpanel',
          id: `${id}-${selected}-tab`,
          'aria-labelledby': `${id}-${selected}`,
        }}
      >
        {tabPanels[selected]}
      </TabPanelContext>
    </div>
  );
};
