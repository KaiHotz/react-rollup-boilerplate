import { createContext, useContext, KeyboardEvent, MouseEvent } from 'react';

export interface ITabContextValues {
  key: string;
  id: string;
  role: string;
  tabIndex: number;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  'aria-posinset': number;
  'aria-selected': boolean;
  'aria-controls': string;
}

export interface ITabPanelContextValues {
  role: string;
  id: string;
  'aria-labelledby': string;
}

export interface TabListContextValues {
  selected: number;
  onTabChange: (index: number) => void;
  tabsId: string;
}

export const TabContext = createContext<ITabContextValues | null>(null);
export const TabPanelContext = createContext<ITabPanelContextValues | null>(null);
export const TabListContext = createContext<TabListContextValues | null>(null);

export const useTab = () => {
  const tabData = useContext(TabContext);
  if (tabData == null) {
    throw Error('A Tab must have a TabList parent');
  }

  return tabData;
};

export const useTabPanel = () => {
  const tabPanelData = useContext(TabPanelContext);
  if (tabPanelData == null) {
    throw Error('A TabPanel must have a Tabs parent');
  }

  return tabPanelData;
};

export const useTabList = () => {
  const tabListData = useContext(TabListContext);
  if (tabListData == null) {
    throw Error('A TabList must have a Tabs parent');
  }

  return tabListData;
};
