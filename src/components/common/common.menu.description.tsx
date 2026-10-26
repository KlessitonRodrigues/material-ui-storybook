import { Box, List, ListItem, ListItemButton, ListItemIcon, Stack } from '@mui/material';
import Link from 'next/link';

import { IconProps, Icons } from './common.icon';
import { Text } from './common.text';

export interface DescriptionMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps['iconType'];
    label: string;
    description?: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
  }[];
}

export const DescriptionMenu = (props: DescriptionMenuProps) => {
  const { className, items, ...menuProps } = props;

  return (
    <List
      component="ul"
      className={className}
      sx={{ width: '100%', gap: 4, backgroundColor: 'var(--color-bg1)', padding: 0 }}
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
              <ListItemIcon>
                <Box
                  sx={{
                    padding: 8,
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    border: '1px solid var(--color-default-border)',
                    backgroundColor: item.active ? 'var(--color-main-bg)' : 'var(--color-bg1)',
                    color: item.active ? '#fff' : 'var(--color-fg1)',
                  }}
                >
                  <Icons iconType={item.icon} />
                </Box>
              </ListItemIcon>
              <Stack>
                <Text size="lg" bold>
                  {item.label}
                </Text>
                <Text size="xs" opacity="70">
                  {item.description}
                </Text>
              </Stack>
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
