'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button as MuiButton,
} from '@mui/material';
import { useState } from 'react';

import { Button } from './common.button';

interface ConfirmModalProps {
  message: string;
  color?: 'primary' | 'error' | 'info' | 'success';
  closeLabel?: string;
  confirmLabel?: string;
  children: React.ReactNode;
  onConfirm?: () => void;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { message, children, color = 'primary', onConfirm, confirmLabel, closeLabel } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm?.();
    setIsOpen(false);
  };

  return (
    <div onClick={() => !isOpen && setIsOpen(true)}>
      {children}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ '& .MuiPaper-root': { width: '20rem' } }}
      >
        <DialogContent>
          <DialogContentText sx={{ fontWeight: 700, textAlign: 'center' }}>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between', padding: 16 }}>
          <Button mode="ghost" onClick={() => setIsOpen(false)}>
            {closeLabel || 'Cancel'}
          </Button>
          <MuiButton variant="contained" color={color} onClick={handleConfirm}>
            {confirmLabel || 'Confirm'}
          </MuiButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
