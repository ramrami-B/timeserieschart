import { areaYAxis, barYAxis } from '@/constants/axis';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';

interface YAxisProps {
  isLeft: boolean;
}

const YAxis = ({ isLeft }: YAxisProps) => {
  const [viewwWidth, viewHeight] = useViewSize();
  const yCoordinate = isLeft
    ? ((viewHeight * 0.8) / data.getBarMaxValue()) * 1000 - 30
    : (viewHeight * 0.4) / data.getAreaMaxValue() - 1;

  const yAxisList = isLeft ? barYAxis : areaYAxis;
  
  return (
    <div style={{ height: isLeft ? '80vh' : '40vw' }}>
      {yAxisList.map((axios, idx) => (
        <div
          key={idx}
          style={{
            display: 'flex',
            justifyContent: isLeft ? 'end' : 'start',
          }}
        >
          {isLeft && <p>{axios}</p>}
          <svg width="10" fill="none">
            <line
              x1="0"
              y1={yCoordinate}
              x2="10"
              y2={yCoordinate}
              stroke="black"
            />
          </svg>
          {!isLeft && <p>{axios}</p>}
        </div>
      ))}
    </div>
  );
};

export default YAxis;
