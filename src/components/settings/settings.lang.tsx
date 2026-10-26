'use client';

import { useEffect, useState } from 'react';

import { getDefaultLanguage, setDefaultLanguage } from '../../utils/utils.html';
import { Button } from '../common/common.button';
import { SwapElements } from '../common/common.swap.elements';

export const LangSettings = () => {
  const langOptions = ['en', 'pt'] as string[];
  const [currentLanguage, setCurrentLanguage] = useState('');

  useEffect(() => {
    const defaultLanguage = getDefaultLanguage();
    setCurrentLanguage(langOptions.includes(defaultLanguage) ? defaultLanguage : langOptions[0]);
  }, []);

  const toggleLanguage = () => {
    const currentIndex = langOptions.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % langOptions.length;
    setCurrentLanguage(langOptions[nextIndex]);
    setDefaultLanguage(langOptions[nextIndex]);
  };

  const LangBtn = () => <b>{currentLanguage.toUpperCase()}</b>;

  return (
    <Button color="neutral" variant="square" onClick={toggleLanguage}>
      {currentLanguage && (
        <SwapElements
          active={currentLanguage === 'pt'}
          swapEffect="rotate"
          onElement={<LangBtn />}
          offElement={<LangBtn />}
        />
      )}
    </Button>
  );
};
