'use client';

import { TextField } from '@mui/material';

export interface InputFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  hideCaret?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField = (props: InputFieldProps) => {
  const {
    size,
    type = 'text',
    placeholder,
    label,
    className,
    error,
    disabled,
    hideCaret,
    before,
    after,
    inputProps,
  } = props;

  return (
    <TextField
      className={className}
      {...(inputProps as object)}
      type={type}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      error={!!error}
      helperText={error}
      size={size === 'sm' ? 'small' : 'medium'}
      fullWidth
      variant="outlined"
      slotProps={{
        input: { startAdornment: before, endAdornment: after },
        htmlInput: { className: hideCaret ? 'hide-caret' : undefined },
      }}
    />
  );
};
