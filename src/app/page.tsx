'use client';
import AreaChart from '@/components/AreaChart';
import BarChart from '@/components/BarChart';
import ButtonWrap from '@/components/ButtonWrap';
import YAxis from '@/components/YAxis';
import { colors } from '@/constants/colors';
import { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState<string>('');

  return (
    <main className="main">
      <h1>📈 My Time Series Chart 📈</h1>
      <ButtonWrap filter={filter} setFilter={setFilter} />

      <div className="graph">
        <YAxis isLeft={true} />

        <div className="table">
          <svg width="100%" height="100%">
            <BarChart filter={filter} />
            <AreaChart />
          </svg>
        </div>

        <YAxis isLeft={false} />
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
      `}</style>
    </main>
  );
}
