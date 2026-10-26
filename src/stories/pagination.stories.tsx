import { Meta } from '@storybook/nextjs-vite';

import { Pagination } from '../components/common/common.pagination';

type Story = Meta<typeof Pagination>;

export default {
  component: Pagination,
  title: 'Common/Pagination',
} satisfies Story;

export const Default = {
  args: {
    currentPage: 3,
    lastPage: 10,
  },
} satisfies Story;
