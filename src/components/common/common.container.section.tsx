import { twMerge } from 'tailwind-merge';

import { Column } from './common.container.flex';

interface PageSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PageSection = (props: PageSectionProps) => {
  const { className } = props;

  return <Column {...props} gap={8} className={twMerge(`w-full p-12 my-6 ${className}`)} />;
};
