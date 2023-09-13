import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { chartData } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  highlight: boolean;
}

const Bar = ({ idx, highlight }: BarProps) => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();
  const ele = chartData.get()[idx];

  const barHeight =
    ((viewHeight * 0.8) / chartData.getBarMaxValue()) * ele.value_bar;

  return (
    <svg>
      <rect
        x={idx * eleWidth + idx}
        y={viewHeight * 0.8 - barHeight}
        width={eleWidth}
        height={barHeight}
        fill={highlight ? colors.point : colors.light}
      />
      <title>{`id: ${ele.id}\nvalue_area: ${ele.value_area}\nvalue_bar: ${ele.value_bar}`}</title>
      <style jsx>{`
        rect:hover {
          fill-opacity: 0.5;
        }
      `}</style>
    </svg>
  );
};

export default Bar;
