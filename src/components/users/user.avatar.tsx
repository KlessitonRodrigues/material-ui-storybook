import { useMemo } from 'react';

import { Row } from '../common/common.container.flex';
import { Text } from '../common/common.text';

interface UserInitialsProps {
  name: string;
}

export const UserInitials = (props: UserInitialsProps) => {
  const { name } = props;

  const initials = useMemo(() => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }, [name]);

  return (
    <Row flexX="center" className="h-9 w-9 min-w-9 min-h-9 rounded-full bg-bg1 text-fg3">
      <Text size="lg">{initials}</Text>
    </Row>
  );
};
