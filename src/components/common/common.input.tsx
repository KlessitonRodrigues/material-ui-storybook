import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/utils.string';

export interface InputFieldProps extends HTMLAttributes<HTMLDivElement> {
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
  const inputStyles = twMerge([
    'input outline-none w-full',
    toCss(props.error, 'input-error'),
    toCss(props.size, `input-${props.size}`, 'input-md'),
    props.className,
  ]);

  const fieldsetStyles = twMerge([
    'fieldset w-full',
    toCss(!props.size || props.size === 'md', '-mb-4'),
  ]);

  const inputTextStyles = twMerge([
    'text-base',
    toCss(props.hideCaret, 'hide-caret focus:text-primary'),
  ]);

  return (
    <fieldset className={fieldsetStyles}>
      <legend className="fieldset-legend font-normal">{props.label}</legend>
      <label className={inputStyles}>
        {props.before}
        <input
          className={inputTextStyles}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          disabled={props.disabled}
          {...props.inputProps}
        />
        {props.after}
      </label>
      <p className="label text-red">{props.error}</p>
    </fieldset>
  );
};

/* Tailwind include
    input input-sm input-md input-lg
    input-error
    fieldset fieldset-legend
*/
