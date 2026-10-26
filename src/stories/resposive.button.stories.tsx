import type { Meta } from '@storybook/nextjs-vite';

import { Button } from '../components/common/common.button';
import { Row } from '../components/common/common.container.flex';
import { ResponsiveButton } from '../components/common/common.responsive.buttons';

type Story = Meta<typeof ResponsiveButton>;

export default {
  component: ResponsiveButton,
  title: 'Common/ResponsiveButton',
} satisfies Story;

export const Default = {
  args: {
    position: 'bottomRight',
    children: (
      <Row responsive="lg">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Row>
    ),
  },
} satisfies Story;
