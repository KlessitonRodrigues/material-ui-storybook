import { Box } from '@mui/material';

interface IPage {
  className?: string;
  children?: React.ReactNode;
}

export const Page = ({ className, ...props }: IPage) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        maxWidth: 1400,
        margin: 'auto',
        pb: 20,
      }}
      {...props}
    />
  );
};

export const PageFull = ({ className, ...props }: IPage) => {
  return (
    <Box
      className={className}
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden auto',
      }}
      {...props}
    />
  );
};

export const PageContent = ({ className, ...props }: IPage) => {
  return (
    <Box
      className={className}
      sx={{ width: '100%', height: '100%', padding: { xl: 0, xs: 8 } }}
      {...props}
    />
  );
};
