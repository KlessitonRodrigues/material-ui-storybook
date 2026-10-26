'use client';
import { useMemo } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

import { materialColors } from '../../utils/utils.colors';
import { Chart } from '../common/common.container.chart';
import { Text } from '../common/common.text';

interface PieChartProps {
  title?: string;
  className?: string;
  data?: Record<string, string | number>[];
  nameField?: string;
  dataField?: string;
}

const pieColors = [
  materialColors.green['300'],
  materialColors.blue['300'],
  materialColors.red['300'],
  materialColors.indigo['300'],
  materialColors.purple['300'],
  materialColors.brown['300'],
  materialColors.teal['300'],
];

export const PieChartComponent = (props: PieChartProps) => {
  const { title, data, nameField, dataField, className } = props;

  const chartCells = useMemo(() => {
    return (data || []).map((_, index) => (
      <Cell key={`${nameField || 'name'}-${index}`} fill={pieColors[index % pieColors.length]} />
    ));
  }, [data, nameField]);

  return (
    <Chart className={className || ''}>
      <Text tag="h3" bold className="text-center">
        {title || 'Pie Chart'}
      </Text>
      <PieChart
        responsive
        className="w-full max-h-100 mx-auto text-[13px] font-bold"
        style={{ width: '100%', height: '100%' }}
      >
        <Tooltip />
        <Pie
          data={data}
          dataKey={dataField || 'value'}
          nameKey={nameField || 'name'}
          innerRadius="15%"
          outerRadius="80%"
          label
        >
          {chartCells}
        </Pie>
        <Legend height={24} iconSize={16} align="center" verticalAlign="top" />
      </PieChart>
    </Chart>
  );
};
