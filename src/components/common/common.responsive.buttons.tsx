'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from './common.button';
import { Icons } from './common.icon';
import { SwapElements } from './common.swap.elements';

interface ResponsiveButtonProps {
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  children: React.ReactNode;
}

const positionMap: Record<ResponsiveButtonProps['position'], string> = {
  topLeft: 'right-0 -top-2 -translate-y-full',
  topRight: 'left-0 -top-2 -translate-y-full',
  bottomLeft: 'right-0 -bottom-2 translate-y-full',
  bottomRight: 'left-0 -bottom-2 translate-y-full',
};

export const ResponsiveButton = (props: ResponsiveButtonProps) => {
  const { position, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="hidden lg:flex">{children}</div>
      <div className="lg:hidden">
        <Button
          mode="ghost"
          size="lg"
          variant="square"
          className="transition"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <SwapElements
            active={!isOpen}
            swapEffect="rotate"
            offElement={<Icons iconType="menuDots" iconSize="1.6rem" />}
            onElement={<Icons iconType="close" iconSize="1.6rem" />}
          />
        </Button>
        <div
          className={twMerge(
            'absolute z-50 p-6 bg-bg1 rounded-sm shadow-sm border',
            positionMap[position],
          )}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
