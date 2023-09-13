import AreaChart from '@/components/area/AreaChart';
import BarChart from '@/components/bar/BarChart';
import YAxis from './YAxis';
import { colors } from '@/constants/colors';

interface ChartProps {
  filter: string;
}

const Chart = ({ filter }: ChartProps) => {
  return (
    <div className="graph">
      <YAxis isLeft={true} />
      <div className="table">
        <svg width="100%" height="100%">
          <BarChart filter={filter} />
          <AreaChart />
        </svg>
      </div>
      <YAxis isLeft={false} />
      <style jsx>
        {`
          .graph {
            display: flex;
          }
          .table {
            width: 90vw;
            height: 80vh;
            border-left: 0.1px solid ${colors.black};
            border-bottom: 0.1px solid ${colors.black};
            border-right: 0.1px solid ${colors.black};
          }
        `}
      </style>
    </div>
  );
};

export default Chart;
