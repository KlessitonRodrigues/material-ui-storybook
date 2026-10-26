import { twMerge } from 'tailwind-merge';

interface IPage {
  className?: string;
  children: React.ReactNode;
}

export const Page = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(`flex flex-col items-center gap-2 pb-20 max-w-350 m-auto ${className}`)}
    />
  );
};

export const PageFull = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(`w-screen h-screen overflow-hidden overflow-y-auto ${className}`)}
    />
  );
};

export const PageContent = ({ className, ...props }: IPage) => {
  return <div {...props} className={twMerge(`w-full h-full px-2 xl:px-0 ${className}`)} />;
};
