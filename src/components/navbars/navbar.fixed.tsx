'use client';
import { useState } from 'react';

import { Badge } from '../common/common.badge';
import { Button } from '../common/common.button';
import { Row } from '../common/common.container.flex';
import { If } from '../common/common.container.if';
import { Icons } from '../common/common.icon';
import { SwapElements } from '../common/common.swap.elements';
import { Text } from '../common/common.text';
import { UserInitials } from '../users/user.avatar';

interface NavBarProps {
  title?: string;
  userName?: string;
  userNotifications?: number;
  sidebarComponent?: React.ReactNode;
  userMenuComponent?: React.ReactNode;
  notificationsComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const NavBar = (props: NavBarProps) => {
  const {
    title,
    userName,
    userNotifications,
    sidebarComponent,
    userMenuComponent,
    notificationsComponent,
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifyMenuOpen, setNotifyMenuOpen] = useState(false);

  const handleSideBar = (to?: boolean) => {
    setMenuOpen(to ?? !menuOpen);
    setUserMenuOpen(false);
    setNotifyMenuOpen(false);
  };

  const handleUserMenu = (to?: boolean) => {
    setUserMenuOpen(to ?? !userMenuOpen);
    setMenuOpen(false);
    setNotifyMenuOpen(false);
  };

  const handleNotifications = (to?: boolean) => {
    setNotifyMenuOpen(to ?? !notifyMenuOpen);
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setUserMenuOpen(false);
    setNotifyMenuOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-40" onMouseLeave={closeMenus}>
      <nav className="navbar p-4 z-30 shadow-sm bg-main text-white rounded-b-sm">
        <Row gap={4}>
          <If condition={!!sidebarComponent}>
            <Button
              mode="ghost"
              variant="square"
              size="lg"
              className="transition"
              onClick={() => handleSideBar()}
              onMouseEnter={() => handleSideBar(true)}
            >
              <SwapElements
                swapEffect="rotate"
                active={!menuOpen}
                offElement={<Icons iconType="menu" iconSize="2rem" />}
                onElement={<Icons iconType="close" iconSize="2rem" />}
              />
            </Button>
          </If>

          <Row flexY="center">
            <Icons iconType="brush" iconSize="1.8rem" />
            <Text size="xl" bold>
              {title || 'Application'}
            </Text>
          </Row>

          <If condition={!!(userMenuComponent || notificationsComponent)}>
            <Row flexY="center" className="w-fit px-2" gap={4}>
              <Badge content={userNotifications || 0}>
                <Button
                  mode="ghost"
                  variant="square"
                  size="md"
                  className="transition"
                  onClick={() => handleNotifications()}
                  onMouseEnter={() => handleNotifications(true)}
                >
                  <Icons iconType="notification" iconSize="1.6rem" />
                </Button>
              </Badge>
              <Button
                mode="ghost"
                variant="square"
                size="lg"
                className="transition"
                onClick={() => handleUserMenu()}
                onMouseEnter={() => handleUserMenu(true)}
              >
                <UserInitials name={userName || 'User Name'} />
              </Button>
            </Row>
          </If>
        </Row>
      </nav>

      <div
        className="absolute w-full lg:w-auto h-[93vh] max-w-md left-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: menuOpen ? '100%' : '0' }}
      >
        <div className="min-w-md h-full">{sidebarComponent}</div>
      </div>

      <div
        className="absolute max-w-md right-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: notifyMenuOpen ? '100%' : '0' }}
      >
        <div className="min-w-md h-full">{notificationsComponent}</div>
      </div>

      <div
        className="absolute max-w-xs right-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: userMenuOpen ? '100%' : '0' }}
      >
        <div className="min-w-xs h-full">{userMenuComponent}</div>
      </div>
    </div>
  );
};
