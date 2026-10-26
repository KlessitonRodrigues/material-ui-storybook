import { IconMap } from './common.icon.map';

export interface IconProps {
  className?: string;
  iconType?: keyof typeof IconMap;
  iconSize?: '1rem' | '1.2rem' | '1.4rem' | '1.6rem' | '1.8rem' | '2rem' | '2.4rem' | '2.8rem';
}

export const Icons = (props: IconProps) => {
  const { className = '', iconSize = '1.4rem', iconType } = props;
  const currentIcon = IconMap[iconType || 'noType'];

  return (
    <span className={`icon block ${className}`} style={{ width: iconSize, height: iconSize }}>
      {currentIcon}
    </span>
  );
};

/* Tailwind include
    w-[1rem] w-[1.2rem] w-[1.4rem] w-[1.6rem] w-[1.8rem] w-[2rem] w-[2.4rem] w-[2.8rem]
*/
