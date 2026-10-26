import { MenuItem, TextField } from '@mui/material';

interface SelectFieldProps {
  className?: string;
  label?: string;
  description?: string;
  defaultValue?: string;
  options?: { label: string; value: string }[];
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const SelectField = (props: SelectFieldProps) => {
  const { className, options, label, description, defaultValue, error, disabled, onChange } = props;

  return (
    <TextField
      className={className}
      select
      label={label}
      defaultValue={defaultValue || ''}
      disabled={disabled}
      error={!!error}
      helperText={error || description}
      size={props.size === 'sm' ? 'small' : 'medium'}
      fullWidth
      onChange={e => onChange?.(e.target.value)}
    >
      {options?.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
