import { Box } from '@mui/material';

import { Icons } from './common.icon';

interface CarouselProps {
  height?: number | string;
  items: { imgUrl: string; content: React.ReactNode }[];
}

export const Carousel = (props: CarouselProps) => {
  const { items, height } = props;
  return (
    <Box sx={{ width: '100%', position: 'relative' }} style={{ height }}>
      <Box
        sx={{
          display: 'flex',
          overflow: 'auto scroll',
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          scrollSnapType: 'y mandatory',
        }}
      >
        {items.map(({ imgUrl, content }, index) => (
          <Box
            key={index}
            id={`slide${index}`}
            sx={{ height: '100%', position: 'relative', scrollSnapAlign: 'start', flexShrink: 0 }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: `center / cover no-repeat url(${imgUrl})`,
                filter: 'brightness(0.5)',
              }}
            />
            <Box sx={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex' }}>
              {content}
            </Box>
            <a href={`#slide${index === 0 ? items.length - 1 : index - 1}`}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 24,
                  color: '#fff',
                  padding: 8,
                  zIndex: 20,
                  border: '1px solid var(--color-default-border)',
                  borderRadius: '50%',
                }}
              >
                <Icons iconType="upArrow" />
              </Box>
            </a>
            <a href={`#slide${(index + 1) % items.length}`}>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 24,
                  color: '#fff',
                  padding: 8,
                  zIndex: 20,
                  border: '1px solid var(--color-default-border)',
                  borderRadius: '50%',
                }}
              >
                <Icons iconType="downArrow" />
              </Box>
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
