import { Box } from '@mui/material';

type IChart = React.HTMLAttributes<HTMLDivElement>;

export const Chart = ({ className, ...props }: IChart) => {
  return (
    <Box
      className={className}
      sx={{
        minHeight: 480,
        padding: 16,
        border: '1px solid var(--color-default-border)',
      }}
      {...props}
    />
  );
};
