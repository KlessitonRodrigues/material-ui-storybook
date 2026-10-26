'use client';
import { useState } from 'react';

import { Button } from './common.button';
import { Row } from './common.container.flex';
import { Text } from './common.text';

interface ConfirmModalProps {
  message: string;
  color?: 'primary' | 'error' | 'info' | 'success';
  closeLabel?: string;
  confirmLabel?: string;
  children: React.ReactNode;
  onConfirm?: () => any;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { message, children, color = 'primary', onConfirm } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <div onClick={() => !isOpen && setIsOpen(true)}>
      {children}
      <dialog className="modal" open={isOpen}>
        <div className="modal-box w-80 space-y-8 rounded-md p-6 shadow-xl">
          <Text bold size="lg" className="text-center">
            {message}
          </Text>
          <Row flexX="end" gap={2}>
            <Button type="button" mode="ghost" color="neutral" onClick={handleCancel}>
              {props.closeLabel || 'Cancel'}
            </Button>
            <Button type="button" color={color} onClick={handleConfirm}>
              {props.confirmLabel || 'Confirm'}
            </Button>
          </Row>
        </div>
      </dialog>
    </div>
  );
};
