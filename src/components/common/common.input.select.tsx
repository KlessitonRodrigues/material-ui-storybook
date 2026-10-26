'use client';
import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/utils.string';

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
  const { className, options, size, label, description, defaultValue, error, disabled, onChange } =
    props;

  return (
    <fieldset className={twMerge('fieldset w-full', className)}>
      <legend className="fieldset-legend">{label}</legend>
      <select
        className={twMerge(
          `w-full outline-none select select-${props.size || 'md'}`,
          toCss(size, `select-${size}`, 'select-md'),
          toCss(error, 'border-error'),
          toCss(disabled, 'opacity-50 cursor-not-allowed'),
        )}
        defaultValue={defaultValue || 'Select'}
        disabled={disabled}
        onChange={e => onChange?.(e.target.value)}
      >
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {description && <span className="label">{description}</span>}
      {error && <span className="label text-red">{error}</span>}
    </fieldset>
  );
};

/* Tailwind include
    select select-sm select-md select-lg
*/
