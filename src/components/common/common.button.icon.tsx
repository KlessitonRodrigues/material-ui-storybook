import { Button, ButtonProps } from './common.button';
import { IconProps, Icons } from './common.icon';

export const IconButton = (props: IconProps & ButtonProps) => {
  const { children, iconSize, iconType, mode, variant, ...btnProps } = props;
  return (
    <Button mode={mode ?? 'ghost'} variant={variant ?? 'circle'} {...btnProps}>
      <Icons iconType={iconType} iconSize={iconSize || '1.2rem'} />
      {children}
    </Button>
  );
};
