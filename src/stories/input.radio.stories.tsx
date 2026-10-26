import type { Meta } from '@storybook/nextjs-vite';

import { RadioInputField } from '../components/common/common.input.radio';

type Story = Meta<typeof RadioInputField>;

export default {
  component: RadioInputField,
  title: 'Common/InputRadio',
} satisfies Story;

export const Default = {
  args: {
    size: 'sm',
    defaultValue: 'option1',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
} satisfies Story;
