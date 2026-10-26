import { Box } from '@mui/material';

interface SwapRotateProps {
  className?: string;
  active?: boolean;
  swapEffect?: 'rotate' | 'flip' | 'scale';
  offElement?: React.ReactNode;
  onElement?: React.ReactNode;
}

export const SwapElements = (props: SwapRotateProps) => {
  const { className, active, offElement, onElement, swapEffect } = props;
  const transition = 'all 0.3s ease';

  return (
    <Box className={className} sx={{ display: 'inline-grid', gridTemplateAreas: '"area"' }}>
      <Box
        sx={{
          gridArea: 'area',
          transition,
          opacity: active ? 1 : 0,
          transform: active && swapEffect === 'rotate' ? 'rotate(180deg)' : undefined,
          scale: active && swapEffect === 'scale' ? 1 : 0,
          visibility: active ? 'visible' : 'hidden',
        }}
      >
        {offElement}
      </Box>
      <Box
        sx={{
          gridArea: 'area',
          transition,
          opacity: active ? 0 : 1,
          scale: !active && swapEffect === 'scale' ? 1 : 0,
        }}
      >
        {onElement}
      </Box>
    </Box>
  );
};
