'use client';

import { Row } from './common.container.flex';
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
    <Row>
      <Text size="sm">{label}</Text>
      {beforeElement}
      <label className="toggle toggle-md border">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={e => onChange?.(e.target.checked)}
        />
        <Icons iconType="close" iconSize="1rem" aria-label="enabled" />
        <Icons iconType="checkMark" iconSize="1rem" aria-label="disabled" />
      </label>
      {afterElement}
    </Row>
  );
};
