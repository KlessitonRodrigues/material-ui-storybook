import { Box, CircularProgress, Button as MuiButton } from '@mui/material';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'wide' | 'block' | 'square' | 'circle';
  mode?: 'ghost' | 'outline' | 'link';
  loading?: boolean;
  onClick?: (ev?: React.SyntheticEvent) => void;
  disabled?: boolean;
  btnProps?: React.ComponentProps<typeof MuiButton>;
}

const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  accent: 'inherit',
  neutral: 'inherit',
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
} as const;

const sizeMap = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'large',
} as const;

const sizePaddingMap = {
  xs: '18px 10px',
  sm: '20px 12px',
  md: '24px 14px',
  lg: '28px 16px',
} as const;

export const Button = (props: ButtonProps) => {
  const {
    className,
    label,
    children,
    variant,
    mode,
    size = 'md',
    color,
    loading,
    disabled,
    onClick,
    btnProps,
    ...buttonProps
  } = props;

  const onClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) return;
    onClick?.(ev);
  };

  return (
    <MuiButton
      className={className}
      {...buttonProps}
      {...btnProps}
      onClick={onClickHandler}
      disabled={disabled || loading}
      size={sizeMap[size]}
      variant={mode === 'outline' ? 'outlined' : mode ? 'text' : 'contained'}
      color={colorMap[color || 'primary'] as 'primary'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: variant === 'square' ? 0 : 2,
        ...(variant === 'circle' ? { borderRadius: '50%' } : {}),
        ...(variant === 'circle' ? { minWidth: '3rem', minHeight: '3rem' } : {}),
        ...(variant === 'wide' ? { px: 4 } : {}),
        ...(variant === 'block' ? { width: '100%' } : {}),
        ...(mode === 'link' ? { textDecoration: 'underline', px: 1 } : {}),
        ...(size === 'xs' ? { py: 0.5, px: 1 } : {}),
      }}
    >
      {loading && <CircularProgress size={14} color="inherit" />}
      {label ?? children}
    </MuiButton>
  );
};
