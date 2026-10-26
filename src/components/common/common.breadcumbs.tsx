import { Box, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import { useMemo } from 'react';

import { If } from './common.container.if';
import { IconProps, Icons } from './common.icon';

export interface BreadcumbsProps {
  className?: string;
  items?: { label: string; icon?: IconProps['iconType']; href?: string }[];
}

export const Breadcumbs = (props: BreadcumbsProps) => {
  const { className, items } = props;

  const itemList = useMemo(() => {
    return items?.map((item, index) => (
      <Box key={index} sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Icons iconType={item.icon} />
        <If
          condition={!!item.href}
          true={
            <Link href={item.href || ''} style={{ textDecoration: 'none' }}>
              <Typography component="span" sx={{ fontWeight: 700 }}>
                {item.label}
              </Typography>
            </Link>
          }
          false={
            <Typography component="span" sx={{ fontWeight: 700 }}>
              {item.label}
            </Typography>
          }
        />
      </Box>
    ));
  }, [items]);

  return (
    <MuiBreadcrumbs
      className={className}
      sx={{
        backgroundColor: 'var(--color-bg1)',
        padding: '8px 16px',
        borderRadius: 1,
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {itemList}
    </MuiBreadcrumbs>
  );
};
