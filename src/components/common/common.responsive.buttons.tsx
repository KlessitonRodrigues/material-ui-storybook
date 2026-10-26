'use client';
import { Box } from '@mui/material';
import { useState } from 'react';

import { Button } from './common.button';
import { Icons } from './common.icon';
import { SwapElements } from './common.swap.elements';

interface ResponsiveButtonProps {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  children: React.ReactNode;
}

const positionMap: Record<ResponsiveButtonProps['position'], object> = {
  topLeft: { right: 0, bottom: '100%' },
  topRight: { left: 0, bottom: '100%' },
  bottomLeft: { right: 0, top: '100%' },
  bottomRight: { left: 0, top: '100%' },
};

export const ResponsiveButton = (props: ResponsiveButtonProps) => {
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
            offElement={<Icons iconType="menuDots" iconSize="1.6rem" />}
            onElement={<Icons iconType="close" iconSize="1.6rem" />}
          />
        </Button>
        <Box
          sx={{
            position: 'absolute',
            zIndex: 50,
            padding: 24,
            backgroundColor: 'var(--color-bg1)',
            borderRadius: 1,
            border: '1px solid var(--color-default-border)',
            ...positionMap[position],
          }}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
