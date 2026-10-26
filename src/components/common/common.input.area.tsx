import { HTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/utils.string';

export interface AreaInputFieldProps extends HTMLAttributes<HTMLFieldSetElement> {
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  hideCaret?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  loading?: boolean;
  inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export const AreaInputField = (props: AreaInputFieldProps) => {
  const {
    className,
    size,
    error,
    placeholder,
    label,
    disabled,
    hideCaret,
    before,
    after,
    loading,
    inputProps,
    ...fieldProps
  } = props;

  const fieldStyles = twMerge([
    'outline-none w-full',
    toCss(size, `textarea-${size}`, 'textarea-md'),
    toCss(error, 'textarea-error'),
    className,
  ]);

  const textareaStyles = twMerge([
    'textarea outline-none w-full h-full text-base',
    toCss(hideCaret, 'hide-caret focus:text-primary'),
  ]);

  return (
    <fieldset className={'fieldset w-full'} {...fieldProps}>
      {label && <legend className="fieldset-legend font-normal">{label}</legend>}
      <label className={fieldStyles} data-loading={loading}>
        {before}
        <textarea
          className={textareaStyles}
          placeholder={placeholder}
          disabled={disabled}
          {...inputProps}
        />
        {after}
      </label>
      {error && <p className="label text-red">{error}</p>}
    </fieldset>
  );
};

/* Tailwind include
  textarea textarea-sm textarea-md textarea-lg
  textarea-error
  fieldset fieldset-legend
*/
