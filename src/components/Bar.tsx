import { DataType } from '@/@types/DataType';
import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';

interface BarProps {
  idx: number;
  ele: DataType;
}

const Bar = ({ idx, ele }: BarProps) => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();

  const barHeight =
    ((viewHeight * 0.8) / data.getBarMaxValue()) * ele.value_bar;

  return (
    <>
      <rect
        x={idx * eleWidth + idx}
        y={viewHeight * 0.8 - barHeight}
        width={eleWidth}
        height={barHeight}
        fill={colors.light}
      />
      <title>{`id: ${ele.id}\nvalue_area: ${ele.value_area}\nvalue_bar: ${ele.value_bar}`}</title>
      <style jsx>{`
        rect:hover {
          fill: ${colors.point};
        }
      `}</style>
    </>
  );
};

export default Bar;
