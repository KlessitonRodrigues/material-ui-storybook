import { Box, Paper as MuiPaper } from '@mui/material';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;

  return (
    <MuiPaper
      component={Box}
      className={className}
      sx={{
        width: '100%',
        padding: 24,
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
      {...paperProps}
    >
      {children}
    </MuiPaper>
  );
};
