export const formatStr = (str: string, template: string) => {
  const newStr = Array.from(template);
  for (const char of str) {
    const replace = newStr.indexOf('x');
    if (replace < 0) return str;
    newStr[replace] = char;
  }
  return newStr.join('');
};

export const toCss = (value: any, str: string, str2?: string) => {
  return value ? str : str2 || '';
};

export const toBooleanStr = (value: boolean) => {
  return value ? 'true' : 'false';
};
