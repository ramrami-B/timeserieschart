'use client';
import BarChart from '@/components/BarChart';

export default function Home() {
  return (
    <main className="main">
      <h1>📈 My Time Series Chart 📈</h1>
      <div className="table">
        <BarChart />
      </div>
      <style jsx>{`
        .main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .table {
          width: 90vw;
          height: 80vh;
        }
      `}</style>
    </main>
  );
}
