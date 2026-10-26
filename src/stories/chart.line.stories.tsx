import { Meta } from '@storybook/nextjs-vite';

import { LineChartComponent } from '../components/charts/chart.line';

type Story = Meta<typeof LineChartComponent>;

export default {
  component: LineChartComponent,
  title: 'Charts/LineChart',
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
    dataFields: ['value', 'value2'],
    xField: 'name',
    title: 'Line Chart Example',
  },
} satisfies Story;
