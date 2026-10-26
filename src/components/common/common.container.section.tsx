import { Box } from '@mui/material';

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageSection = (props: PageSectionProps) => {
  const { className } = props;

  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        padding: 48,
        marginY: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 64,
      }}
      {...props}
    />
  );
};
