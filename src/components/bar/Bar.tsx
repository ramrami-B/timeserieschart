import { DataType } from '@/@types/DataType';
import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  ele: DataType;
  highlight: boolean;
}

const Bar = ({ idx, highlight }: BarProps) => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();

  const barHeight =
    ((viewHeight * 0.8) / data.getBarMaxValue()) * data.get()[idx].value_bar;

  return (
    <svg>
      <rect
        x={idx * eleWidth + idx}
        y={viewHeight * 0.8 - barHeight}
        width={eleWidth}
        height={barHeight}
        fill={highlight ? colors.point : colors.light}
      />
      <title>{`id: ${data.get()[idx].id}\nvalue_area: ${data.get()[idx].value_area}\nvalue_bar: ${data.get()[idx].value_bar}`}</title>
      <style jsx>{`
        rect:hover {
          fill-opacity: 0.5;
        }
      `}</style>
    </svg>
  );
};

export default Bar;
