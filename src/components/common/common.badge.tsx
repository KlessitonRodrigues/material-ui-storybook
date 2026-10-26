import { Badge as MuiBadge } from '@mui/material';

interface BadgeProps {
  content: string | number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'main' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'gray';
  children?: React.ReactNode;
}

const colorMap = {
  main: 'var(--color-main)',
  blue: 'var(--color-default-blue)',
  red: 'var(--color-default-red)',
  green: 'var(--color-default-green)',
  yellow: 'var(--color-default-yellow)',
  purple: '#9c27b0',
  gray: 'var(--color-default-gray)',
} as const;

const sizeMap = {
  xs: { fontSize: '0.65rem', height: 14, minWidth: 14 },
  sm: { fontSize: '0.75rem', height: 18, minWidth: 18 },
  md: { fontSize: '0.8rem', height: 22, minWidth: 22 },
  lg: { fontSize: '0.95rem', height: 26, minWidth: 26 },
} as const;

export const Badge = (props: BadgeProps) => {
  const { content, size = 'xs', color = 'main', children } = props;

  if (!content) return <>{children}</>;

  return (
    <MuiBadge
      badgeContent={content}
      sx={{
        '& .MuiBadge-badge': {
          backgroundColor: colorMap[color],
          color: '#fff',
          ...sizeMap[size],
        },
      }}
    >
      {children}
    </MuiBadge>
  );
};
