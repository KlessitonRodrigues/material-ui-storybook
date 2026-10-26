import { Meta } from '@storybook/nextjs-vite';

import { BarChartComponent } from '../components/charts/chart.bar';

type Story = Meta<typeof BarChartComponent>;

export default {
  component: BarChartComponent,
  title: 'Charts/BarChart',
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
    title: 'Bar Chart Example',
  },
} satisfies Story;

export const Horizontal = {
  args: {
    data: [
      { name: 'Jan', value: 30, value2: 20 },
      { name: 'Feb', value: 20, value2: 50 },
      { name: 'Mar', value: 50, value2: 40 },
      { name: 'Apr', value: 40, value2: 10 },
      { name: 'May', value: 60, value2: 30 },
    ],
    dataFields: ['value', 'value2'],
    yField: 'name',
    title: 'Bar Chart Example',
  },
} satisfies Story;
