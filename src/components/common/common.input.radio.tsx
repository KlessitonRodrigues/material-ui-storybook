import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/utils.string';
import { Row } from './common.container.flex';

export interface RadioInputFieldProps {
  className?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioInputField = (props: RadioInputFieldProps) => {
  const inputStyles = twMerge([
    'radio mx-2',
    toCss(props.size, `radio-${props.size}`, 'radio-md'),
    props.className,
  ]);

  return (
    <Row className={twMerge(props.className)}>
      {props.options.map(option => (
        <label key={option.value} className="cursor-pointer">
          <input
            className={inputStyles}
            type="radio"
            name={props.name}
            aria-label={option.label}
            defaultChecked={props.defaultValue === option.value}
            onChange={() => props.onChange?.(option.value)}
          />
          <span className="text-xs">{option.label}</span>
        </label>
      ))}
    </Row>
  );
};

/* Tailwind include
  join join-item
  radio radio-sm radio-md radio-lg
  btn btn-sm btn-md btn-lg
*/
