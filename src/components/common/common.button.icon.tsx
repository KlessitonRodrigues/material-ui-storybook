import { Button, ButtonProps } from './common.button';
import { IconProps, Icons } from './common.icon';

export const IconButton = (props: IconProps & ButtonProps) => {
  const { children, iconSize, iconType, ...btnProps } = props;
  return (
    <Button {...btnProps}>
      <Icons iconType={iconType} iconSize={iconSize || '1.2rem'} />
      {children}
    </Button>
  );
};
