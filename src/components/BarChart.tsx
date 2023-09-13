import Bar from './Bar';
import { data } from '@/utils/ChartData';

const BarChart = () => {
  return (
    <>
      {data.get().map((data, idx) => {
        return <Bar key={idx} idx={idx} value={data.value_bar} />;
      })}
    </>
  );
};

export default BarChart;
