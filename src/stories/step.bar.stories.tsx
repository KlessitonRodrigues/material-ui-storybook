import { Meta } from '@storybook/nextjs-vite';

import { StepBar } from '../components/common/common.step.bar';

type Story = Meta<typeof StepBar>;

export default {
  component: StepBar,
  title: 'Common/StepBar',
} satisfies Story;

export const Default = {
  args: {
    className: 'bg-blue',
    direction: 'horizontal',
    stepItems: [
      { active: true },
      { active: true },
      { active: false },
      { active: false },
      { active: false },
      { active: false },
    ],
  },
} satisfies Story;
