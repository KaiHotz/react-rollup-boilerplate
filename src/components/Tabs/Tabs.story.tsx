import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabsList } from './TabsList';
import { TabPanel } from './TabPanel';
import { Tab } from './Tab';

type Story = StoryObj<typeof Tabs>;

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
};

export const Default: Story = {
  render: function useTabs(args) {
    const [selected, setSelected] = useState(0);

    return (
      <>
        <h4 style={{ textDecoration: 'underline' }}>This is a practical example of component composition in React:</h4>
        <div style={{ padding: '20px 10px', marginTop: 30, border: '1px solid #000' }}>
          <Tabs {...args} selected={selected} setSelected={setSelected}>
            <TabsList>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} title="tooltip">
                <Tab id="foo">First Tab</Tab>
              </div>
              <Tab>Second Tab</Tab>
              <Tab>Third Tab</Tab>
            </TabsList>
            <div>
              <TabPanel>
                <h2>First content:</h2>
              </TabPanel>
            </div>
            <TabPanel>
              <h2>Second content:</h2>
            </TabPanel>
            <TabPanel>
              <h2>Third content:</h2>
            </TabPanel>
          </Tabs>
        </div>
      </>
    );
  },
};

export default meta;
