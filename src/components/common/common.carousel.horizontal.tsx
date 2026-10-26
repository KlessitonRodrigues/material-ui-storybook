import { twMerge } from 'tailwind-merge';

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
      <Row className="relative max-w-5xl border rounded-md shadow-sm p-8" gap={0}>
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
          variant="square"
          className="absolute -left-6 top-1/2 rounded-full"
          onClick={() => handleChangeSelected(selected - 1)}
          disabled={selected === 0}
        >
          <Icons iconType="caretLeft" />
        </Button>
        <Button
          size="lg"
          color="primary"
          variant="square"
          className="absolute -right-6 top-1/2 rounded-full"
          onClick={() => handleChangeSelected(selected + 1)}
          disabled={selected === items.length - 1}
        >
          <Icons iconType="caretRight" />
        </Button>
      </Row>
      <Row flexX="center" gap={2} className="mt-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={twMerge(
              `h-2 w-2 rounded-full cursor-pointer`,
              `${index === selected ? 'bg-primary' : 'bg-gray-300'}`,
            )}
            onClick={() => handleChangeSelected(index)}
          />
        ))}
      </Row>
    </Column>
  );
};
