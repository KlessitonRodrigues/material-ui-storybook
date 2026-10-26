import type { Meta } from '@storybook/nextjs-vite';

import { Menu } from '../components/common/common.menu';

type Story = Meta<typeof Menu>;

export default {
  component: Menu,
  title: 'Common/Menu',
} satisfies Story;

export const Default = {
  args: {
    items: [
      { icon: 'home', label: 'Home', href: '/' },
      { icon: 'settings', label: 'Settings', href: '/settings' },
      { icon: 'user', label: 'Profile', href: '/profile' },
    ],
  },
} satisfies Story;
