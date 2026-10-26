import { Column, Row } from './common.container.flex';
import { Text } from './common.text';

type IDataDisplay = {
  className?: string;
  direction?: 'row' | 'column';
  label?: string;
  labelWidth?: number | string;
  labelSize?: 'xs' | 'sm' | 'md' | 'lg';
  value?: string;
};

export const DataDisplay = (props: IDataDisplay) => {
  const {
    label,
    value,
    className,
    direction = 'column',
    labelWidth = '',
    labelSize = 'md',
  } = props;

  if (direction === 'row') {
    return (
      <Row flexY="start" gap={2} className={className}>
        <Text opacity="60" size={labelSize} style={{ width: labelWidth }}>
          {label}
        </Text>
        <Text bold>{value || ''}</Text>
      </Row>
    );
  }

  return (
    <Column flexX="start" gap={0} className={className}>
      <Text opacity="60" size={labelSize} style={{ width: labelWidth }}>
        {label}
      </Text>
      <Text bold>{value || ''}</Text>
    </Column>
  );
};
