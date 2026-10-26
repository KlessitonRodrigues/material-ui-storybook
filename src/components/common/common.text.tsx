import { Typography } from '@mui/material';

type ITextProps = {
  id?: string;
  bold?: boolean;
  centered?: boolean;
  inline?: boolean;
  className?: string;
  color?: 'main' | 'blue' | 'red' | 'green' | 'yellow' | 'black' | 'gray' | 'white';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  opacity?: '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '90' | '100';
  tag?:
    | 'p'
    | 'b'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'small'
    | 'strong'
    | 'mark'
    | 'em';
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const colorVarMap = {
  main: 'var(--color-main)',
  blue: 'var(--color-default-blue)',
  red: 'var(--color-default-red)',
  green: 'var(--color-default-green)',
  yellow: 'var(--color-default-yellow)',
  black: 'var(--color-default-black)',
  gray: 'var(--color-default-gray)',
  white: 'var(--color-default-white)',
} as const;

const sizeMap = {
  xs: '0.9rem',
  sm: '0.95rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
  '4xl': '2rem',
  '5xl': '2.25rem',
} as const;

export const Text = (props: ITextProps) => {
  const {
    id,
    tag = 'p',
    className = '',
    color,
    size,
    opacity,
    bold,
    centered,
    inline,
    style,
    children,
  } = props;

  return (
    <Typography
      id={id}
      component={tag as any}
      className={className}
      style={style}
      sx={{
        ...(bold ? { fontWeight: 700 } : {}),
        ...(centered ? { textAlign: 'center' } : {}),
        ...(color ? { color: colorVarMap[color] } : {}),
        ...(size ? { fontSize: sizeMap[size] } : {}),
        ...(opacity ? { opacity: Number(opacity) / 100 } : {}),
        ...(inline ? { display: 'inline' } : {}),
      }}
    >
      {children}
    </Typography>
  );
};
