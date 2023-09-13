'use client';
import FilterContainer from '@/components/FilterContainer';
import Chart from '@/components/Chart';
import { colors } from '@/constants/colors';
import { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState<string>('');

  return (
    <main className="main">
      <h1>📈 My Time Series Chart 📈</h1>
      <FilterContainer filter={filter} setFilter={setFilter} />
      <Chart filter={filter} />
      <style jsx>{`
        .main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </main>
  );
}
