import { Meta } from '@storybook/nextjs-vite';

import { Steps } from '../components/common/common.step';

type Story = Meta<typeof Steps>;

export default {
  component: Steps,
  title: 'Common/Steps',
} satisfies Story;

export const Default = {
  args: {
    direction: 'horizontal',
    steps: [
      { label: 'Step 1', active: true },
      { label: 'Step 2', active: false },
      { label: 'Step 3', active: false },
    ],
  },
} satisfies Story;
