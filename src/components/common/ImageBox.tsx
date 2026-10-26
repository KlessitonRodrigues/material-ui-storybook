import { Box, Typography } from '@mui/material';

interface ImageBoxProps {
  src?: string;
  width?: number | string;
  height?: number | string;
  alt: string;
  className?: string;
}

export const ImageBox = (props: ImageBoxProps) => {
  const { src, alt, width, height, className } = props;
  return (
    <Box
      className={className}
      sx={{
        width: '100%',
        backgroundColor: '#e5e7eb',
        overflow: 'hidden',
      }}
      style={{ width, height }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
          }}
        >
          <Typography>{alt}</Typography>
        </Box>
      )}
    </Box>
  );
};
