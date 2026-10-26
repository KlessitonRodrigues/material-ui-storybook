import type { Meta } from '@storybook/nextjs-vite';

import { UserInitials } from '../components/users/user.avatar';

type Story = Meta<typeof UserInitials>;

export default {
  component: UserInitials,
  title: 'Users/UserInitials',
} satisfies Story;

export const Default = {
  args: {
    name: 'Jane Doe',
  },
} satisfies Story;
