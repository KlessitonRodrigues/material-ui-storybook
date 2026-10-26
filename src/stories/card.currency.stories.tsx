import { Meta } from '@storybook/nextjs-vite';

import { CurrencyCard } from '../components/cards/card.currency';

type Story = Meta<typeof CurrencyCard>;

export default {
  component: CurrencyCard,
  title: 'Cards/CurrencyCard',
} satisfies Story;

export const Default = {
  args: {
    total: 'Total Revenue',
    percentage: 12,
    amount: '12,345',
    percentageClassName: 'text-green',
    iconType: 'coin',
  },
} satisfies Story;
