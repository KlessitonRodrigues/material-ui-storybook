'use client';

import { TextField } from '@mui/material';

export interface AreaInputFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  hideCaret?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  loading?: boolean;
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const AreaInputField = (props: AreaInputFieldProps) => {
  const { label, placeholder, className, error, disabled, hideCaret, loading, inputProps } = props;

  return (
    <TextField
      data-loading={loading}
      className={className}
      multiline
      rows={4}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      error={!!error}
      helperText={error}
      fullWidth
      variant="outlined"
      slotProps={{
        htmlInput: {
          ...inputProps,
          className: hideCaret ? 'hide-caret' : undefined,
        },
      }}
    />
  );
};
