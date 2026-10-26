import { Meta } from '@storybook/nextjs-vite';

import { SquareSkeleton } from '../components/common/common.skeleton.square';

type Story = Meta<typeof SquareSkeleton>;

export default {
  component: SquareSkeleton,
  title: 'Common/SkeletonSquare',
} satisfies Story;

export const Default = {
  args: {
    className: 'w-60 h-60',
    show: true,
  },
} satisfies Story;
