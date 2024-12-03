import { useState } from 'react';
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
              <Tab>First Tab</Tab>
              <Tab>Second Tab</Tab>
              <Tab>Third Tab</Tab>
            </TabsList>
            <div>
              <TabPanel>
                <h2>First content:</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla urna. Nulla nec malesuada
                  arcu, vehicula venenatis libero. Curabitur ut lacus vel metus posuere finibus. Sed non lobortis ante.
                  In id condimentum magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                  turpis egestas. Vestibulum ornare varius aliquet.
                </p>
                <p>
                  Cras ut finibus ex. Donec eu sollicitudin ligula. Suspendisse potenti. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Praesent faucibus pellentesque diam, sit amet tempus est interdum sit
                  amet. Proin eget vehicula dui. Ut quis rutrum nisl. Sed sed risus ut lacus convallis laoreet. Nunc
                  elit erat, venenatis at sodales eleifend, vestibulum ut sapien. Maecenas orci metus, bibendum sit amet
                  massa eu, elementum dignissim dolor. Aliquam ut massa gravida, ultricies augue id, dignissim nulla.
                  Duis vehicula, turpis non tempus malesuada, libero enim lacinia eros, ut vehicula magna ex nec turpis.
                  Nulla ultrices, elit ut sodales facilisis, enim ligula varius odio, at venenatis purus sapien non
                  nulla.
                </p>
              </TabPanel>
            </div>
            <TabPanel>
              <h2>Second content:</h2>
              <p>
                Mauris placerat dui lacinia pellentesque porttitor. Mauris tincidunt pellentesque odio elementum
                lacinia. Duis maximus magna consectetur libero iaculis fringilla. Vivamus vestibulum, lorem sed lobortis
                molestie, odio justo feugiat eros, id mattis nisi turpis eget tellus. Ut porta in quam at cursus.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
                rutrum sit amet turpis ac ultrices. Pellentesque at scelerisque ipsum. Curabitur vulputate tempor elit,
                in pharetra nibh tincidunt ac. Duis ornare elementum lacus, ac commodo libero scelerisque blandit. Proin
                orci enim, eleifend laoreet ante in, sagittis mattis odio. Etiam id euismod augue. Integer maximus mi
                est, ac tincidunt magna venenatis in. Proin et enim eget urna egestas lacinia sed id libero.
              </p>
            </TabPanel>
            <TabPanel>
              <h2>Third content:</h2>
              <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
                <img
                  src="https://randomuser.me/api/portraits/lego/0.jpg"
                  data-int="0"
                  data-gender="lego"
                  alt="lego-user"
                  width={100}
                />
                <p>
                  Fusce elementum sollicitudin turpis at lacinia. Pellentesque orci odio, dignissim a dolor at,
                  tincidunt luctus lacus. Donec sit amet gravida nibh, eget auctor quam. Morbi aliquet odio ut aliquam
                  efficitur. Vivamus arcu magna, porttitor eget tempus id, convallis vitae sem. Fusce hendrerit, neque
                  vel congue eleifend, ex odio pretium est, nec venenatis nibh orci in metus. Vestibulum congue lectus
                  quis ligula fermentum feugiat quis a sem. Praesent non lacinia justo, ut dictum odio.
                </p>
              </div>
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
