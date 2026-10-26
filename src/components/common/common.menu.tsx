import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';

import { IconProps, Icons } from './common.icon';
import { Text } from './common.text';

export interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
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

  return (
    <List
      component="ul"
      className={className}
      sx={{ width: '100%', minWidth: 240, backgroundColor: 'var(--color-bg1)', padding: 0 }}
      {...menuProps}
    >
      {items?.map((item, index) => (
        <ListItem key={index} component="li" disablePadding>
          <Link
            href={item.href || ''}
            onClick={item.onClick}
            style={{ width: '100%', textDecoration: 'none' }}
          >
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    border: '1px solid var(--color-default-border)',
                    borderRadius: 1,
                    padding: 4,
                  }}
                >
                  <Icons iconType={item.icon} />
                </Box>
              </ListItemIcon>
              <ListItemText primary={<Text bold>{item.label}</Text>} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
