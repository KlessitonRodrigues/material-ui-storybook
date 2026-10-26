import type { Meta } from '@storybook/nextjs-vite';

import { Row } from '../components/common/common.container.flex';
import { Icons } from '../components/common/common.icon';
import { Text } from '../components/common/common.text';
import { NavbarTop } from '../components/navbars/navbar.top';
import { UserInitials } from '../components/users/user.avatar';

type Story = Meta<typeof NavbarTop>;

export default {
  component: NavbarTop,
  title: 'Navbars/NavbarTop',
} satisfies Story;

export const Default = {
  args: {
    className: 'bg-blue text-white',
    leftComponent: (
      <Row gap={4}>
        <Icons iconType="menu" iconSize="1.4rem" />
        <Text bold size="lg">
          Navbar
        </Text>
      </Row>
    ),
    centerComponent: (
      <Row flexX="center" gap={4}>
        <Text size="md">Navbar</Text>
        <Text size="md">Navbar</Text>
        <Text size="md">Navbar</Text>
      </Row>
    ),
    rightComponent: <UserInitials name="Joe Due" />,
  },
} satisfies Story;
