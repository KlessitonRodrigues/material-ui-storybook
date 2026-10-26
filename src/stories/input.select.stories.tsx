import type { Meta } from '@storybook/nextjs-vite';

import { SelectField } from '../components/common/common.input.select';

type Story = Meta<typeof SelectField>;

export default {
  component: SelectField,
  title: 'Common/InputSelect',
} satisfies Story;

export const Default = {
  args: {
    label: 'Select Label',
    size: 'md',
    error: "select can't be empty",
    description: 'This is a description for the select input.',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
} satisfies Story;
