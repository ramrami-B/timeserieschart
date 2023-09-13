import { colors } from '@/constants/colors';
import getAreaPoints from '@/utils/getAreaPoints';
import { displayPartsToString } from 'typescript';

const AreaChart = () => {
  const points = getAreaPoints();
  const pointList = points.split(' ');

  return (
    <svg>
      <polygon points={points} fill={colors.dark} fillOpacity="0.9" />
      {pointList.map((point, idx) => {
        const cx = point.split(',')[0];
        const cy = point.split(',')[1];
        return (
          <circle
            key={idx}
            cx={cx}
            cy={cy}
            r="5"
            fill={colors.point}
            fillOpacity="0.5"
          />
        );
      })}
      <style jsx>
        {`
          circle:hover {
            fill: ${colors.white};
          }
        `}
      </style>
    </svg>
  );
};

export default AreaChart;
