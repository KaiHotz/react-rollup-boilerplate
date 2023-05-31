import React from 'react';
import { Tabs } from './Tabs';
import { TabsList } from './TabsList';
import { TabPanel } from './TabPanel';
import { Tab } from './Tab';

export default {
  title: 'Tabs',
  component: Tabs,
};

export const Default = () => {
  return (
    <Tabs id="tab-example">
      <TabsList>
        <Tab>First Tab</Tab>
        <Tab>Second Tab</Tab>
        <Tab>Third Tab</Tab>
      </TabsList>
      <TabPanel>First content</TabPanel>
      <TabPanel>Second content</TabPanel>
      <TabPanel>Third content</TabPanel>
    </Tabs>
  );
};
