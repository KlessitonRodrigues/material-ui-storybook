import type { Meta } from '@storybook/nextjs-vite';

import { InputField } from '../components/common/common.input';

type Story = Meta<typeof InputField>;

export default {
  component: InputField,
  title: 'Common/InputField',
} satisfies Story;

export const Default = {
  args: {
    label: 'Input Label',
    type: 'text',
    size: 'md',
    error: "input can't be empty",
    placeholder: 'Enter text here',
  },
} satisfies Story;
