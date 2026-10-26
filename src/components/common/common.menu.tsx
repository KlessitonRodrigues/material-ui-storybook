import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { IconProps, Icons } from './common.icon';
import { Text } from './common.text';

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps['iconType'];
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
  }[];
}

export const Menu = (props: MenuProps) => {
  const { className, items, ...menuProps } = props;
  const classNames = [`menu w-full h-full min-w-60 bg-bg1 ${className}`];

  return (
    <ul className={twMerge(...classNames)} {...menuProps}>
      {items?.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href || ''}
            onClick={item.onClick}
            className={twMerge(
              'rounded-sm',
              item.active && 'bg-primary/10 text-primary hover:bg-primary/15',
            )}
          >
            <Icons iconType={item.icon} iconSize="1.2rem" className="mr-2" />
            <Text bold={item.active}>{item.label}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
};
