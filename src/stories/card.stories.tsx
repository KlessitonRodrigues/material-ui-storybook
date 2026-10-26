import { Meta } from '@storybook/nextjs-vite';

import { Card } from '../components/common/common.card';
import { Text } from '../components/common/common.text';

type Story = Meta<typeof Card>;

export default {
  component: Card,
  title: 'Common/Card',
} satisfies Story;

export const Default = {
  args: {
    children: (
      <>
        <Text bold>Default Card</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet aperiam vel rerum
          facere sit atque mollitia, eligendi molestiae placeat nulla? Eaque obcaecati laborum
          repellendus, sunt ut autem labore ipsa.
        </Text>
      </>
    ),
  },
} satisfies Story;
