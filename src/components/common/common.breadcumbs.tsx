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
  const classNames = [`breadcrumbs text-sm font-bold bg-bg1 px-4 py-2 rounded-md shadow-sm`];

  const itemList = useMemo(() => {
    return items?.map((item, index) => (
      <li key={index} className="flex gap-2">
        <Icons iconType={item.icon} />
        <If
          condition={!!item.href}
          true={<Link href={item.href || ''}>{item.label}</Link>}
          false={<Row>{item.label}</Row>}
        />
      </li>
    ));
  }, [items]);

  return (
    <div className={twMerge(...classNames, className)}>
      <ul>{itemList}</ul>
    </div>
  );
};
