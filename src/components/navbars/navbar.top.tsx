import { twMerge } from 'tailwind-merge';

import { Row } from '../common/common.container.flex';

interface NavbarTopProps {
  className?: string;
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const NavbarTop = (props: NavbarTopProps) => {
  const { className, leftComponent, centerComponent, rightComponent } = props;

  return (
    <Row
      className={twMerge(
        `topnavbar px-4 sticky shadow-xs top-0 z-40 backdrop-blur-xl bg-bg1-transparent ${className}`,
      )}
    >
      <Row className="navbar m-auto max-w-350 whitespace-nowrap">
        <Row flexX="start" gap={4}>
          {leftComponent}
        </Row>
        <Row flexX="center" gap={4}>
          {centerComponent}
        </Row>
        <Row flexX="end" gap={4}>
          {rightComponent}
        </Row>
      </Row>
    </Row>
  );
};
