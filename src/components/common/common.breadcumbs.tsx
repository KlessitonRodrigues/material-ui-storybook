import Link from 'next/link';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { Row } from './common.container.flex';
import { If } from './common.container.if';
import { IconProps, Icons } from './common.icon';

export interface BreadcumbsProps {
  className?: string;
  items?: { label: string; icon?: IconProps['iconType']; href?: string }[];
}

export const Breadcumbs = (props: BreadcumbsProps) => {
  const { className, items } = props;
  const classNames = [`breadcrumbs text-sm font-normal text-fg3`];

  const itemList = useMemo(() => {
    return items?.map((item, index) => {
      const isLast = index === (items?.length ?? 0) - 1;
      return (
        <li key={index} className={twMerge('flex gap-2', isLast && 'text-fg1 font-medium')}>
          <Icons iconType={item.icon} iconSize="1rem" />
          <If
            condition={!!item.href}
            true={
              <Link href={item.href || ''} className="hover:text-main">
                {item.label}
              </Link>
            }
            false={<Row>{item.label}</Row>}
          />
        </li>
      );
    });
  }, [items]);

  return (
    <div className={twMerge(...classNames, className)}>
      <ul>{itemList}</ul>
    </div>
  );
};
