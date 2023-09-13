import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  value: number;
}

const Bar = ({ idx, value }: BarProps) => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();

  const barHeight = ((viewHeight * 0.8) / data.getBarMaxValue()) * value;

  return (
    <rect
      x={idx * eleWidth + idx}
      y={viewHeight * 0.8 - barHeight}
      width={eleWidth}
      height={barHeight}
      fill={colors.light}
    />
  );
};

export default Bar;
