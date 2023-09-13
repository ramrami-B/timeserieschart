import useViewSize from '@/hooks/useViewSize';
import { chartData } from './ChartData';

const getAreaPoints = () => {
  const [viewwWidth, viewHeight, eleWidth] = useViewSize();

  let string = '';

  chartData.get().forEach((ele, idx) => {
    const areaHeight =
      ((viewHeight * 0.4) / chartData.getAreaMaxValue()) * ele.value_area;
    const x = idx + eleWidth / 2 + idx * eleWidth;
    const y = viewHeight * 0.8 - areaHeight;

    string += `${x},${y}`;
    string += ' ';
  });

  const points = `0,${viewHeight * 0.8} `
    .concat(string)
    .concat(`${viewwWidth * 0.9},${viewHeight * 0.8}`);

  return points;
};

export default getAreaPoints;
