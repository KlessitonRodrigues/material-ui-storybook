import { Meta } from '@storybook/nextjs-vite';

import { Text } from '../components/common/common.text';

type Story = Meta<typeof Text>;

export default {
  component: Text,
  title: 'Common/Text',
} satisfies Story;

export const Default = {
  args: {
    tag: 'h1',
    size: '2xl',
    bold: true,
    children: 'Sample Text',
    opacity: '90',
    color: 'main',
  },
} satisfies Story;
