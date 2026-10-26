'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import {
  getDefaultTheme,
  getRedirectPathByLanguage,
  setDefaultTheme,
} from '../../utils/utils.html';

export const ReadSettings = () => {
  const router = useRouter();

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    if (defaultTheme) setDefaultTheme(defaultTheme || 'light');
  }, []);

  useEffect(() => {
    const redirectPath = getRedirectPathByLanguage(['en', 'pt']);
    if (redirectPath) router.push(redirectPath);
  }, [router]);
  return <></>;
};
