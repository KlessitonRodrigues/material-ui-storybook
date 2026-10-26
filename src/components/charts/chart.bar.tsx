'use client';
import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import { materialColors } from '../../utils/utils.colors';
import { Chart } from '../common/common.container.chart';
import { Text } from '../common/common.text';

interface BarChartProps {
  title?: string;
  className?: string;
  data?: Record<string, string | number>[];
  xField?: string;
  yField?: string;
  dataFields?: string[];
}

const barColors = [
  materialColors.green['300'],
  materialColors.blue['300'],
  materialColors.red['300'],
  materialColors.indigo['300'],
  materialColors.purple['300'],
  materialColors.brown['300'],
  materialColors.teal['300'],
];

export const BarChartComponent = (props: BarChartProps) => {
  const { title, data, xField, yField, dataFields, className } = props;

  const chartBars = useMemo(() => {
    return dataFields?.map(field => (
      <Bar
        key={field}
        dataKey={field}
        fill={barColors[dataFields.indexOf(field) % barColors.length]}
        label={{ position: yField ? 'right' : 'top' }}
        radius={yField ? [0, 5, 5, 0] : [5, 5, 0, 0]}
      />
    ));
  }, [dataFields, yField]);

  return (
    <Chart className={className || ''}>
      <Text tag="h3" bold className="text-center">
        {title || 'Bar Chart'}
      </Text>
      <BarChart
        responsive
        className={'w-full max-h-100 text-[13px] font-bold'}
        style={{ width: '100%', height: '100%' }}
        layout={yField ? 'vertical' : 'horizontal'}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xField}
          type={yField ? 'number' : 'category'}
          stroke={materialColors.grey['500']}
        />
        <YAxis
          dataKey={yField}
          type={xField ? 'number' : 'category'}
          stroke={materialColors.grey['500']}
        />
        <Tooltip />
        {chartBars}
        <Legend height={24} iconSize={16} align="center" verticalAlign="top" />
      </BarChart>
    </Chart>
  );
};
