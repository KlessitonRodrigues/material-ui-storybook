import { useMemo } from 'react';

import { Button } from './common.button';
import { Column, Row } from './common.container.flex';
import { Icons } from './common.icon';
import { Text } from './common.text';

interface NotificationListProps {
  title?: string;
  noNotificationsMessage?: string;
  notifications?: {
    id: string;
    message: string;
  }[];
  onRemove?: () => void;
}

export const NotificationList = (props: NotificationListProps) => {
  const { title, noNotificationsMessage, notifications, onRemove } = props;

  const notificationItems = useMemo(() => {
    if (!notifications || notifications.length === 0) {
      return (
        <Row flexX="center">
          <Text bold opacity="60">
            {noNotificationsMessage || 'No new notifications'}
          </Text>
        </Row>
      );
    }

    return notifications.map(notification => (
      <Row key={notification.id} className={`border rounded-sm p-4 bg-bg2`}>
        <Text size="sm" className="w-full">
          {notification.message}
        </Text>
      </Row>
    ));
  }, [notifications, onRemove]);

  return (
    <Column className="p-4 bg-bg1 shadow-lg">
      <Row>
        <Icons iconType="notification" iconSize="1.4rem" />
        <Text bold size="lg" className="w-full">
          {title || 'Notifications'}
        </Text>
        <Button mode="ghost" variant="square" size="sm" onClick={() => onRemove?.()}>
          <Icons iconType="close" iconSize="1.2rem" />
        </Button>
      </Row>
      <Column>{notificationItems}</Column>
    </Column>
  );
};
