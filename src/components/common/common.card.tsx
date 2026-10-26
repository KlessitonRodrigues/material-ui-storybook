import { Box } from '@mui/material';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Card = ({ className, children, ...cardProps }: CardProps) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        padding: 16,
        backgroundColor: 'var(--color-bg1)',
        border: '1px solid var(--color-default-border)',
        borderRadius: 1,
      }}
      {...cardProps}
    >
      {children}
    </Box>
  );
};
