import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;

  const paperStyles = twMerge([
    'paper w-full space-y-4 rounded-sm bg-bg1 p-6 shadow-sm slide-up',
    className,
  ]);

  return (
    <div className={paperStyles} {...paperProps}>
      {children}
    </div>
  );
};
