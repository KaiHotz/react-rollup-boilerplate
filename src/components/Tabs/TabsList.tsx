import { Children, createRef, FC, PropsWithChildren, useCallback } from 'react';

import { TabContext, useTabList } from './context';
import './TabsList.scss';

export const TabsList: FC<PropsWithChildren> = ({ children }) => {
  // provided by top level Tabs component coming up next
  const { tabsId, selected, onTabChange } = useTabList();

  // store a reference to the DOM element so we can select via id
  // and manage the focus states
  const ref = createRef<HTMLDivElement>();

  const selectTabByIndex = useCallback(
    (index: number) => {
      if (ref.current) {
        const selectedTab = ref.current.querySelector(`[id=${tabsId}-${index}]`) as HTMLDivElement;
        selectedTab?.focus();
        onTabChange(index);
      }
    },
    [onTabChange, ref, tabsId],
  );

  // we would handle keyboard events here
  // things like selecting with left and right arrow keys
  const onKeyDown = useCallback(() => {
    // ...
  }, []);

  // .. some other stuff - again we're omitting styles etc

  return (
    <div role="tablist" ref={ref} className="tab-list">
      {Children.map(children, (child, index) => {
        const isSelected = index === selected;

        return (
          <TabContext.Provider
            // (!) in real life this would need to be restructured
            // (!) and memoized to use a stable references everywhere
            value={{
              key: `${tabsId}-${index}`,
              id: `${tabsId}-${index}`,
              role: 'tab',
              'aria-posinset': index + 1,
              'aria-selected': isSelected,
              'aria-controls': `${tabsId}-${index}-tab`,
              // managing focussability
              tabIndex: isSelected ? 0 : -1,
              onClick: () => selectTabByIndex(index),
              onKeyDown,
            }}
          >
            {child}
          </TabContext.Provider>
        );
      })}
    </div>
  );
};
