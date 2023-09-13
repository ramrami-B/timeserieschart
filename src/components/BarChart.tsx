import { data } from '@/utils/ChartData';
import Bar from './Bar';
import { useState } from 'react';

interface BarChartProps {
  filter: string;
}

const BarChart = ({ filter }: BarChartProps) => {
  return (
    <>
      {data.get().map((ele, idx) => {
        return ele.id === filter ? (
          <Bar key={idx} idx={idx} ele={ele} highlight={true} />
        ) : (
          <Bar key={idx} idx={idx} ele={ele} highlight={false} />
        );
      })}
    </>
  );
};

export default BarChart;
