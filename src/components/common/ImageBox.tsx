import { twMerge } from 'tailwind-merge';

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
    <div
      className={twMerge('w-full max-w-md md:max-w-4xl bg-gray-200 overflow-hidden', className)}
      style={{ width, height }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500">{alt}</div>
      )}
    </div>
  );
};
