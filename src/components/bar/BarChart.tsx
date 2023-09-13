import { chartData } from '@/utils/ChartData';
import Bar from './Bar';
import { DataType } from '@/@types/DataType';

interface BarChartProps {
  filter: string;
}

const BarChart = ({ filter }: BarChartProps) => {
  return (
    <>
      {chartData.get().map((obj: DataType, idx: number) => {
        return obj.id === filter ? (
          <Bar key={idx} idx={idx} obj={obj} highlight={true} />
        ) : (
          <Bar key={idx} idx={idx} obj={obj} highlight={false} />
        );
      })}
    </>
  );
};

export default BarChart;
