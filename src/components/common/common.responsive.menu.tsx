'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from './common.button';
import { Icons } from './common.icon';
import { SwapElements } from './common.swap.elements';

interface ResponsiveMenuProps {
  position: 'bottom' | 'top';
  children: React.ReactNode;
}

const positionMap: Record<NonNullable<ResponsiveMenuProps['position']>, string> = {
  top: '-top-2 -translate-y-full',
  bottom: '-bottom-2 translate-y-full',
};

export const ResponsiveMenu = (props: ResponsiveMenuProps) => {
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
            offElement={<Icons iconType="menu" iconSize="2rem" />}
            onElement={<Icons iconType="close" iconSize="2rem" />}
          />
        </Button>
        <div
          className={twMerge(
            'fixed z-50 left-2 w-[94vw] p-6 bg-bg1 rounded-sm shadow-sm border',
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
