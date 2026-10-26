import type { Meta } from '@storybook/nextjs-vite';

import { DescriptionMenu } from '../components/common/common.menu.description';

type Story = Meta<typeof DescriptionMenu>;

export default {
  component: DescriptionMenu,
  title: 'Common/DescriptionMenu',
} satisfies Story;

export const Default = {
  args: {
    items: [
      { icon: 'home', label: 'Home', description: 'Go to the home page', href: '/' },
      {
        icon: 'settings',
        label: 'Settings',
        description: 'Adjust your preferences',
        href: '/settings',
      },
      { icon: 'user', label: 'Profile', description: 'View your profile', href: '/profile' },
    ],
  },
} satisfies Story;
