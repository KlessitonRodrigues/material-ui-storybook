'use client';
import { Box } from '@mui/material';
import { useState } from 'react';

import { Button } from './common.button';
import { Icons } from './common.icon';
import { SwapElements } from './common.swap.elements';

interface ResponsiveMenuProps {
  position: 'bottom' | 'top';
  children: React.ReactNode;
}

const positionMap: Record<NonNullable<ResponsiveMenuProps['position']>, string> = {
  top: 'bottom: 100%',
  bottom: 'top: 100%',
};

export const ResponsiveMenu = (props: ResponsiveMenuProps) => {
  const { position, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ display: { lg: 'flex', xs: 'none' } }}>{children}</Box>
      <Box sx={{ display: { lg: 'none', xs: 'flex' } }}>
        <Button mode="ghost" size="lg" variant="square" onClick={() => setIsOpen(prev => !prev)}>
          <SwapElements
            active={!isOpen}
            swapEffect="rotate"
            offElement={<Icons iconType="menu" iconSize="2rem" />}
            onElement={<Icons iconType="close" iconSize="2rem" />}
          />
        </Button>
        <Box
          sx={{
            position: 'fixed',
            zIndex: 50,
            left: 8,
            width: '94vw',
            padding: 24,
            backgroundColor: 'var(--color-bg1)',
            borderRadius: 1,
            border: '1px solid var(--color-default-border)',
          }}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
