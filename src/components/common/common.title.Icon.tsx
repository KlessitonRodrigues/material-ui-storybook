import { Row } from './common.container.flex';
import { IconProps, Icons } from './common.icon';
import { Text } from './common.text';

interface TitleIconProps {
  title?: string;
  icon?: IconProps['iconType'];
}

export const TitleIcon = (props: TitleIconProps) => {
  const { title, icon } = props;

  return (
    <Row className="border-b pb-2 mb-2">
      <Icons iconType={icon} iconSize="1.2rem" />
      <Text bold opacity="60">
        {title}
      </Text>
    </Row>
  );
};
