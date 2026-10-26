import { Meta } from '@storybook/nextjs-vite';

import { ConfirmModal } from '../components/common/common.modal';

type Story = Meta<typeof ConfirmModal>;

export default {
  component: ConfirmModal,
  title: 'Common/ConfirmModal',
} satisfies Story;

export const Default = {
  args: {
    color: 'success',
    message: 'Are you sure you want to proceed?',
    confirmLabel: 'Confirm',
    closeLabel: 'Close',
    children: 'This is a confirm modal. Please confirm your action.',
  },
} satisfies Story;
