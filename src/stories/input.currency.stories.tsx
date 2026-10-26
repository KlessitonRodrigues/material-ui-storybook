import type { Meta } from '@storybook/nextjs-vite';

import { CurrencyInputField } from '../components/common/common.input.currency';

type Story = Meta<typeof CurrencyInputField>;

export default {
  component: CurrencyInputField,
  title: 'Common/InputCurrency',
} satisfies Story;

export const Default = {
  args: {
    label: 'Input Label',
    size: 'md',
    error: "input can't be empty",
    inputProps: {
      value: '0.00',
    },
  },
} satisfies Story;
