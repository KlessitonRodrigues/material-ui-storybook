import { Icons } from './common.icon';

interface CarouselProps {
  height?: number | string;
  items: { imgUrl: string; content: React.ReactNode }[];
}

export const Carousel = (props: CarouselProps) => {
  const { items, height } = props;
  return (
    <div className="w-full relative" style={{ height }}>
      <div className="carousel carousel-vertical h-full w-full">
        {items.map(({ imgUrl, content }, index) => (
          <div key={index} id={`slide${index}`} className="carousel-item h-full relative">
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${imgUrl})`,
                filter: 'brightness(0.5)',
              }}
            />
            <div className="relative z-10 w-full flex">{content}</div>
            <a href={`#slide${index === 0 ? items.length - 1 : index - 1}`}>
              <div className="absolute top-4 right-6 text-white p-2 z-20 border rounded-full">
                <Icons iconType="upArrow" />
              </div>
            </a>
            <a href={`#slide${(index + 1) % items.length}`}>
              <div className="absolute bottom-4 right-6 text-white p-2 z-20 border rounded-full">
                <Icons iconType="downArrow" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
