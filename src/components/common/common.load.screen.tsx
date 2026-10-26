import { Box, CircularProgress } from '@mui/material';

import { Text } from './common.text';

export interface LoadScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const LoadScreen = (props: LoadScreenProps) => {
  const { className, children, ...loadScreenProps } = props;

  return (
    <Box
      className={className}
      sx={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--color-default-black)',
        zIndex: 50,
      }}
      {...loadScreenProps}
    >
      <Box
        sx={{
          height: '100%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <CircularProgress size={48} color="primary" />
        <Text size="4xl" bold style={{ color: '#ffffff' }}>
          {props.title}
        </Text>
        {children}
      </Box>
    </Box>
  );
};
