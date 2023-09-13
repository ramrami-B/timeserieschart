import { chartData } from '@/utils/ChartData';
import Bar from './Bar';

interface BarChartProps {
  filter: string;
}

const BarChart = ({ filter }: BarChartProps) => {
  return (
    <>
      {chartData.get().map((ele, idx) => {
        return ele.id === filter ? (
          <Bar key={idx} idx={idx} highlight={true} />
        ) : (
          <Bar key={idx} idx={idx} highlight={false} />
        );
      })}
    </>
  );
};

export default BarChart;
