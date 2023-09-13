import { data } from '@/utils/ChartData';
import Bar from './Bar';

const BarChart = () => {
  return (
    <>
      {data.get().map((ele, idx) => {
        return <Bar key={idx} idx={idx} ele={ele} />;
      })}
    </>
  );
};

export default BarChart;
