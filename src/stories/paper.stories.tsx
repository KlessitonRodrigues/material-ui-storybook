import { Meta } from '@storybook/nextjs-vite';

import { Paper } from '../components/common/common.paper';
import { Text } from '../components/common/common.text';

type Story = Meta<typeof Paper>;

export default {
  component: Paper,
  title: 'Common/Paper',
} satisfies Story;

export const Default = {
  args: {
    children: (
      <>
        <Text bold>Default Paper</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet aperiam vel rerum
          facere sit atque mollitia, eligendi molestiae placeat nulla? Eaque obcaecati laborum
          repellendus, sunt ut autem labore ipsa.
        </Text>
      </>
    ),
  },
} satisfies Story;
