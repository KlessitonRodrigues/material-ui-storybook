import { Meta } from '@storybook/nextjs-vite';

import { PieChartComponent } from '../components/charts/chart.pie';

type Story = Meta<typeof PieChartComponent>;

export default {
  component: PieChartComponent,
  title: 'Charts/PieChart',
} satisfies Story;

export const Default = {
  args: {
    data: [
      { name: 'Jan', value: 30 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 50 },
      { name: 'Apr', value: 40 },
      { name: 'May', value: 60 },
    ],
    dataField: 'value',
    title: 'Pie Chart Example',
  },
} satisfies Story;
