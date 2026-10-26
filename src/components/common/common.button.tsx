import { twMerge } from 'tailwind-merge';

import { toCss } from '../../utils/utils.string';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'wide' | 'block' | 'square' | 'circle';
  mode?: 'ghost' | 'outline' | 'link';
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  btnProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
  const btnStyles = twMerge([
    'btn rounded-sm',
    toCss(props.mode === 'ghost', 'btn-ghost'),
    toCss(props.mode === 'link', 'btn-link'),
    toCss(props.mode === 'outline', 'btn-outline border-base-300 hover:bg-bg2'),
    toCss(props.disabled, 'cursor-not-allowed opacity-50'),
    toCss(props.loading, 'cursor-not-allowed'),
    toCss(props.variant, `btn-${props.variant}`),
    toCss(props.size, `btn-${props.size}`, 'btn-md'),
    toCss(props.color, `btn-${props.color}`),
    props.className,
  ]);

  return (
    <button
      className={btnStyles}
      disabled={props.loading || props.disabled}
      onClick={props.onClick}
      {...props.btnProps}
    >
      {props.loading && <span className="loading loading-spinner loading-xs" />}
      {props.label || props.children}
    </button>
  );
};

/* tailwind include
    btn btn-primary btn-secondary btn-accent btn-neutral btn-info btn-success btn-warning btn-error 
    btn-ghost btn-link
    btn-xs btn-sm btn-md btn-lg
    btn-wide btn-block btn-square btn-circle
*/
