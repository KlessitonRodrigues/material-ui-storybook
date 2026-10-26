import { Meta } from '@storybook/nextjs-vite';

import { Button } from '../components/common/common.button';
import { Row } from '../components/common/common.container.flex';

type Story = Meta<typeof Row>;

export default {
  component: Row,
  title: 'Common/Row',
} satisfies Story;

export const Default = {
  args: {
    gap: 4,
    responsive: 'lg',
    flexX: 'center',
    flexY: 'center',
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
} satisfies Story;
