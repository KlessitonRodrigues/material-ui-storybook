'use client';
import { useMemo } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from 'recharts';

import { materialColors } from '../../utils/utils.colors';
import { Chart } from '../common/common.container.chart';
import { Text } from '../common/common.text';

interface RadarChartProps {
  title?: string;
  className?: string;
  data?: Record<string, string | number>[];
  nameField?: string;
  dataFields?: string[];
}

const radarColors = [
  materialColors.green['300'],
  materialColors.blue['300'],
  materialColors.red['300'],
  materialColors.indigo['300'],
  materialColors.purple['300'],
  materialColors.brown['300'],
  materialColors.teal['300'],
];

export const RadarChartComponent = (props: RadarChartProps) => {
  const { title, data, nameField, dataFields, className } = props;

  const chartRadars = useMemo(() => {
    return dataFields?.map((field, index) => (
      <Radar
        key={field}
        name={field}
        dataKey={field}
        stroke={radarColors[index % radarColors.length]}
        fill={radarColors[index % radarColors.length]}
        fillOpacity={0.4}
      />
    ));
  }, [dataFields]);

  return (
    <Chart className={className || ''}>
      <Text tag="h3" bold className="text-center">
        {title || 'Radar Chart'}
      </Text>
      <RadarChart
        responsive
        className="w-full max-h-100 mx-auto text-[13px] font-bold"
        style={{ width: '100%', height: '100%' }}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey={nameField} />
        <PolarRadiusAxis />
        <Tooltip />
        {chartRadars}
        <Legend height={24} iconSize={16} align="center" verticalAlign="top" />
      </RadarChart>
    </Chart>
  );
};
