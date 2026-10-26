import { Card } from '../common/common.card';
import { Row } from '../common/common.container.flex';
import { Icons } from '../common/common.icon';
import { Text } from '../common/common.text';

interface CurrencyCardProps {
  total: string;
  percentage: number;
  amount: string;
  iconType?: 'chart' | 'wallet' | 'dollar' | 'coin';
  percentageClassName?: string;
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const { total, percentage, amount, percentageClassName, iconType } = props;

  return (
    <Card className="w-full lg:max-w-70">
      <Row flexX="between">
        <Text bold opacity="70">
          {total}
        </Text>
        <Text bold opacity="70" className={percentageClassName || 'text-green'}>
          + {percentage}%
        </Text>
      </Row>
      <Row flexX="between" className="mt-4">
        <Icons iconType={iconType || 'chart'} iconSize="2rem" />
        <Text bold opacity="70" size="3xl" className="text-blue">
          {`$${amount}`}
        </Text>
      </Row>
    </Card>
  );
};
