import { FormControl, FormControlLabel, Radio as MuiRadio, RadioGroup } from '@mui/material';

export interface RadioInputFieldProps {
  className?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioInputField = (props: RadioInputFieldProps) => {
  const size = props.size === 'sm' ? 'small' : props.size === 'lg' ? 'medium' : 'medium';

  return (
    <FormControl className={props.className} sx={{ width: '100%' }}>
      <RadioGroup
        row
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={e => props.onChange?.(e.target.value)}
      >
        {props.options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<MuiRadio size={size} />}
            label={option.label}
            sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.75rem' } }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
