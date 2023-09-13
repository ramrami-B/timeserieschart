import { DataType } from '@/@types/DataType';
import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { chartData } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  obj: DataType;
  highlight: boolean;
}

const Bar = ({ idx, obj, highlight }: BarProps) => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();

  const barHeight =
    ((viewHeight * 0.8) / chartData.getMaxValueBar()) * obj.value_bar;

  return (
    <svg>
      <rect
        x={idx * eleWidth + idx}
        y={viewHeight * 0.8 - barHeight}
        width={eleWidth}
        height={barHeight}
        fill={highlight ? colors.point : colors.light}
      />
      <title>{`id: ${obj.id}\nvalue_area: ${obj.value_area}\nvalue_bar: ${obj.value_bar}`}</title>
      <style jsx>{`
        rect:hover {
          fill-opacity: 0.5;
        }
      `}</style>
    </svg>
  );
};

export default Bar;
