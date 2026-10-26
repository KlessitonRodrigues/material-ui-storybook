import type { Meta } from '@storybook/nextjs-vite';

import { AreaInputField } from '../components/common/common.input.area';

type Story = Meta<typeof AreaInputField>;

export default {
  component: AreaInputField,
  title: 'Common/InputArea',
} satisfies Story;

export const Default = {
  args: {
    label: 'Input Label',
    size: 'md',
    error: "input can't be empty",
    placeholder: 'Enter text here',
  },
} satisfies Story;
