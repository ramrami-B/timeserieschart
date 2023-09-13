import Bar from './Bar';
import { data } from '@/utils/ChartData';

const BarChart = () => {
  return (
    <svg width="100%" height="100%">
      {data.get().map((data, idx) => {
        return <Bar key={idx} idx={idx} value={data.value_bar} />;
      })}
    </svg>
  );
};

export default BarChart;
