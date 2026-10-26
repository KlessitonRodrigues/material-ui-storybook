'use client';
import { useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { IconProps, Icons } from './common.icon';

export type TabListProps = {
  className?: string;
  defaultItem?: number;
  items: {
    label: string;
    icon: IconProps['iconType'];
    content: React.ReactNode;
    disabled?: boolean;
    responsive?: 'sm' | 'md' | 'lg';
    value?: string;
  }[];
  onSelect?: (item: TabListProps['items'][number], index: number) => void;
};

export const TabList = (props: TabListProps) => {
  const { items, defaultItem, className, onSelect, ...tabListProps } = props;
  const [tabIndex, setTabIndex] = useState(defaultItem ?? 0);

  const onSelectItem = (index: number) => {
    setTabIndex(index);
    if (onSelect) onSelect(items[index], index);
  };

  useEffect(() => {
    if (defaultItem !== undefined) setTabIndex(defaultItem);
  }, [defaultItem]);

  const tabOptions = useMemo(() => {
    return items.map((item, index) => {
      const classNames = ['tab tabs-lg text-xs text-fg1 gap-1 hover:bg-bg2'];
      if (tabIndex === index) classNames.push('tab-active text-primary');
      if (item.disabled) classNames.push('tab-disabled');
      if (item.responsive) classNames.push('hidden', `${item.responsive}:flex`);

      return (
        <a
          role="tab"
          key={index}
          className={twMerge(classNames.join(' '))}
          onClick={() => onSelectItem(index)}
        >
          {item.icon && <Icons iconType={item.icon} iconSize="1.2rem" />}
          {item.label}
        </a>
      );
    });
  }, [items, tabIndex]);

  return (
    <div className={twMerge('w-full', className)} {...tabListProps}>
      <div role="tablist" className="tabs tabs-lift">
        {tabOptions}
        <div className="flex-1 border-b" />
      </div>
      <div key={tabIndex} className="mt-2 slide-left">
        {items[tabIndex]?.content}
      </div>
    </div>
  );
};

/* tailwind include
   sm:flex md:flex lg:flex 
*/
