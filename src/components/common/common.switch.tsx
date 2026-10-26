'use client';

import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';

import { Icons } from './common.icon';
import { Text } from './common.text';

interface SwitchProps {
  label: string;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
  const { label, checked, beforeElement, afterElement, onChange } = props;

  return (
    <FormControlLabel
      control={<MuiSwitch checked={!!checked} onChange={e => onChange?.(e.target.checked)} />}
      label={
        <>
          {beforeElement}
          <Text size="sm">{label}</Text>
          {afterElement}
        </>
      }
    />
  );
};
