import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => {
  const { className, children, ...cardProps } = props;

  return (
    <div className={twMerge('w-full card bg-bg1 border rounded-sm p-4', className)} {...cardProps}>
      {children}
    </div>
  );
};
