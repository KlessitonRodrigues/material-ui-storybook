import type { Meta } from '@storybook/nextjs-vite';

import { Switch } from '../components/common/common.switch';

type Story = Meta<typeof Switch>;

export default {
  component: Switch,
  title: 'Common/Switch',
} satisfies Story;

export const Default = {
  args: {
    label: 'Switch Label',
    checked: true,
  },
} satisfies Story;
