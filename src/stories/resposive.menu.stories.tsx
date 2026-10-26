import type { Meta } from '@storybook/nextjs-vite';

import { Menu } from '../components/common/common.menu';
import { ResponsiveMenu } from '../components/common/common.responsive.menu';

type Story = Meta<typeof ResponsiveMenu>;

const children = (
  <Menu
    items={[
      { icon: 'home', label: 'Home', href: '/' },
      { icon: 'settings', label: 'Settings', href: '/settings' },
      { icon: 'user', label: 'Profile', href: '/profile' },
    ]}
  />
);

export default {
  component: ResponsiveMenu,
  title: 'Common/ResponsiveMenu',
} satisfies Story;

export const Default = {
  args: {
    position: 'bottom',
    children,
  },
} satisfies Story;
