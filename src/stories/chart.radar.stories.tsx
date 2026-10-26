import { Meta } from '@storybook/nextjs-vite';

import { RadarChartComponent } from '../components/charts/chart.radar';

type Story = Meta<typeof RadarChartComponent>;

export default {
  component: RadarChartComponent,
  title: 'Charts/RadarChart',
} satisfies Story;

export const Default = {
  args: {
    data: [
      { name: 'Jan', value: 30, value2: 20 },
      { name: 'Feb', value: 20, value2: 50 },
      { name: 'Mar', value: 50, value2: 40 },
      { name: 'Apr', value: 40, value2: 10 },
      { name: 'May', value: 60, value2: 30 },
    ],
    title: 'Radar Chart Example',
    dataFields: ['value', 'value2'],
    nameField: 'name',
  },
} satisfies Story;
