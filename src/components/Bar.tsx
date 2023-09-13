import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  value: number;
}

const Bar = ({ idx, value }: BarProps) => {
  const [viewwWidth, viewHeight] = useViewSize();

  const barHeight = ((viewHeight * 0.8) / data.getBarMaxValue()) * value;
  const barWeight = (viewwWidth * 0.9 - data.getLength()) / data.getLength();

  return (
    <rect
      x={idx * barWeight + idx}
      y={viewHeight * 0.8 - barHeight}
      width={barWeight}
      height={barHeight}
      fill={colors.light}
    />
  );
};

export default Bar;
