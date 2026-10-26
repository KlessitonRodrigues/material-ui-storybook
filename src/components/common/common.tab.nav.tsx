'use client';
import { Box, Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';

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

const breakpointMap = { sm: 'sm', md: 'md', lg: 'lg' } as const;

export const TabList = (props: TabListProps) => {
  const { items, defaultItem, className, onSelect, ...tabListProps } = props;
  const [tabIndex, setTabIndex] = useState(defaultItem ?? 0);

  const handleChange = (_event: React.SyntheticEvent, value: number) => {
    setTabIndex(value);
    if (onSelect) onSelect(items[value], value);
  };

  useEffect(() => {
    if (defaultItem !== undefined) setTabIndex(defaultItem);
  }, [defaultItem]);

  const tabOptions = useMemo(() => {
    return items.map((item, index) => {
      const sx = item.responsive
        ? { display: { xs: 'none', [breakpointMap[item.responsive]]: 'flex' } }
        : undefined;

      return (
        <MuiTab
          key={index}
          label={item.label}
          icon={item.icon ? <Icons iconType={item.icon} iconSize="1.2rem" /> : undefined}
          iconPosition="start"
          disabled={item.disabled}
          sx={sx}
        />
      );
    });
  }, [items]);

  return (
    <Box className={className} sx={{ width: '100%' }} {...tabListProps}>
      <MuiTabs value={tabIndex} onChange={handleChange}>
        {tabOptions}
      </MuiTabs>
      <Box key={tabIndex} sx={{ mt: 2 }}>
        {items[tabIndex]?.content}
      </Box>
    </Box>
  );
};
