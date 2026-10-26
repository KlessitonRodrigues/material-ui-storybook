import { Box } from '@mui/material';

import { ImageBox } from './ImageBox';
import { Button } from './common.button';
import { Column, Row } from './common.container.flex';
import { Icons } from './common.icon';

interface HorizontalCarouselProps {
  items: { imageSrc: string }[];
  selected: number;
  handleChangeSelected: (index: number) => void;
}

export const HorizontalCarousel = (props: HorizontalCarouselProps) => {
  const { items, selected, handleChangeSelected } = props;

  return (
    <Column gap={0}>
      <Row
        style={{
          position: 'relative',
          maxWidth: 1024,
          border: '1px solid var(--color-default-border)',
          boxShadow: 'var(--shadow-sm)',
          padding: 32,
        }}
        gap={0}
      >
        {items.map((item, index) => (
          <Column
            key={index}
            style={{
              width: index === selected ? '100%' : '0',
              transition: 'width 0.3s ease-in-out',
              overflow: 'hidden',
            }}
          >
            <ImageBox
              src={item.imageSrc}
              alt={`corousel image ${index}`}
              width={1000}
              height={450}
            />
          </Column>
        ))}

        <Button
          size="lg"
          color="primary"
          style={{ position: 'absolute', left: -24, top: '50%' }}
          onClick={() => handleChangeSelected(selected - 1)}
          disabled={selected === 0}
        >
          <Icons iconType="caretLeft" />
        </Button>
        <Button
          size="lg"
          color="primary"
          style={{ position: 'absolute', right: -24, top: '50%' }}
          onClick={() => handleChangeSelected(selected + 1)}
          disabled={selected === items.length - 1}
        >
          <Icons iconType="caretRight" />
        </Button>
      </Row>
      <Row flexX="center" gap={2} style={{ marginTop: 16 }}>
        {items.map((_, index) => (
          <Box
            key={index}
            sx={{
              height: 8,
              width: 8,
              borderRadius: '50%',
              cursor: 'pointer',
              backgroundColor: index === selected ? 'var(--color-main)' : '#d1d5db',
            }}
            onClick={() => handleChangeSelected(index)}
          />
        ))}
      </Row>
    </Column>
  );
};
