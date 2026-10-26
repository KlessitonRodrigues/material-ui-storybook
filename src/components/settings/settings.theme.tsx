'use client';

import { useEffect, useState } from 'react';

import { getDefaultTheme, setDefaultTheme } from '../../utils/utils.html';
import { Button } from '../common/common.button';
import { Icons } from '../common/common.icon';
import { SwapElements } from '../common/common.swap.elements';

export const ThemeSettings = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = getDefaultTheme();
    setIsDark(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setDefaultTheme(newTheme);
    setIsDark(newTheme === 'dark');
  };

  return (
    <Button color="neutral" variant="square" onClick={toggleTheme}>
      <SwapElements
        active={isDark}
        swapEffect="rotate"
        onElement={<Icons iconType="sun" iconSize="1.2rem" />}
        offElement={<Icons iconType="moon" iconSize="1.2rem" />}
      />
    </Button>
  );
};
