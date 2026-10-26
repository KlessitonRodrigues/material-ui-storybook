'use client';

export const getFromStorage = (key: string) => {
  if (!window) return '';
  return window.localStorage.getItem(key);
};

export const setToStorage = (key: string, value: string) => {
  if (!window) return '';
  window.localStorage.setItem(key, value);
};

export const isDarkTheme = () => {
  if (!window) return false;
  const body = window.document.body;
  if (body.classList.contains('dark')) return true;
  return false;
};

export const setDefaultTheme = (theme: 'light' | 'dark') => {
  if (!window) return;
  const body = window.document.body;
  if (theme === 'dark') body.classList.add('dark');
  else body.classList.remove('dark');
  if (theme === 'light') body.classList.add('light');
  else body.classList.remove('light');
  setToStorage('theme', theme);
};

export const getDefaultTheme = () => {
  if (!window) return 'light';
  const storedTheme = getFromStorage('theme');
  if (storedTheme) return storedTheme as 'light' | 'dark';
  return 'light';
};

export const getDefaultLanguage = () => {
  const languages = ['en', 'pt'];
  const defaultLang = process.env.NEXT_PUBLIC_APP_LOCALE;
  if (defaultLang) return defaultLang;

  const storedLang = getFromStorage('language') || '';
  if (languages.includes(storedLang)) return storedLang;

  if (!window) return 'en';
  const browserLang = window.navigator.language || 'en';
  const lang = browserLang.split('-')[0];
  return lang;
};

export const setDefaultLanguage = (lang: string) => {
  setToStorage('language', lang);
  if (!window) return;
  const path = new URL(window.location.href);
  const pathArr = path.pathname.split('/').filter(Boolean);
  if (pathArr[0].length === 2) pathArr.shift();
  const newPath = `/${lang}/${pathArr.join('/')}${path.search}`;
  window.history.replaceState({}, '', newPath);
  window.location.reload();
};

export const getRedirectPathByLanguage = (allowedlangs: string[]) => {
  const defaultLanguage = getDefaultLanguage();
  const path = new URL(window.location.href);
  const pathName = path.pathname.split('/')[1];

  if (!allowedlangs.includes(defaultLanguage)) return null;
  if (pathName === defaultLanguage) return null;
  if (pathName && allowedlangs.includes(pathName)) return null;
  const targetUrl = `/${defaultLanguage}${path.pathname}${path.search}`;
  return targetUrl;
};

export const inputNumbers = (ev: any, decimals?: boolean) => {
  const value = ev.currentTarget.value;
  const key = ev.key;
  const invalidKeys = ['.', ',', 'e', 'E', '-'];

  if (decimals) invalidKeys.splice(0, 2);

  if (invalidKeys.includes(key)) ev.preventDefault();

  if (decimals && (key === ',' || key === '.')) {
    if (value.includes('.') || value.includes(',')) {
      ev.preventDefault();
    } else {
      ev.currentTarget.value = value.replace(',', '.');
    }
  }
  if (Number(value) < 0) {
    ev.currentTarget.value = '1';
    ev.preventDefault();
  }
  if (Number(value) === 0 && key === 'ArrowDown') {
    ev.currentTarget.value = '1';
    ev.preventDefault();
  }
};
