'use client';
import AreaChart from '@/components/AreaChart';
import BarChart from '@/components/BarChart';
import YAxis from '@/components/YAxis';
import { areaYAxis, barYAxis } from '@/constants/axis';
import { colors } from '@/constants/colors';
import useViewSize from '@/hooks/useViewSize';
import { data } from '@/utils/ChartData';
import { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState<string>('');

  const handlerClickFilter = (region: string) => {
    setFilter(region);
  };

  return (
    <main className="main">
      <h1>📈 My Time Series Chart 📈</h1>
      <div className="buttons">
        <button onClick={() => handlerClickFilter('')}>All</button>
        <button onClick={() => handlerClickFilter('강남구')}>강남구</button>
        <button onClick={() => handlerClickFilter('노원구')}>노원구</button>
        <button onClick={() => handlerClickFilter('성북구')}>성북구</button>
        <button onClick={() => handlerClickFilter('중랑구')}>중랑구</button>
      </div>

      <div className="graph">
        <YAxis isLeft={true} />
        
        <div className="table">
          <svg width="100%" height="100%">
            <BarChart filter={filter} />
            <AreaChart />
          </svg>
        </div>

        <YAxis isLeft={false} />
        {/* <div className="y-axios-area">
          {areaYAxis.map((axios, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'start' }}>
              <svg width="10" fill="none">
                <line
                  x1="0"
                  y1={(viewHeight * 0.4) / data.getAreaMaxValue() - 1}
                  x2="10"
                  y2={(viewHeight * 0.4) / data.getAreaMaxValue() - 1}
                  stroke="black"
                />
              </svg>
              <p>{axios}</p>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        .main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .graph {
          display: flex;
        }
        .y-axios-bar {
          height: 80vh;
        }
        .y-axios-area {
          height: 40vh;
        }
        .table {
          width: 90vw;
          height: 80vh;
          border-left: 0.1px solid ${colors.black};
          border-bottom: 0.1px solid ${colors.black};
          border-right: 0.1px solid ${colors.black};
        }
        .buttons {
          display: flex;
        }
      `}</style>
    </main>
  );
}
