import { colors } from '@/constants/colors';
import getAreaPoints from '@/utils/getAreaPoints';

const AreaChart = () => {
  const points = getAreaPoints();

  return (
    <>
      return <polygon points={points} fill={colors.dark} fillOpacity="0.9" />
    </>
  );
};

export default AreaChart;
