'use client';

import { chartData } from '@/utils/ChartData';
import { useEffect, useState } from 'react';

const useViewSize = () => {
  const [viewwWidth, setViewWidth] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
    setViewHeight(window.innerHeight);
  }, []);

  const eleWidth =
    (viewwWidth * 0.9 - chartData.getLength()) / chartData.getLength();

  return [viewwWidth, viewHeight, eleWidth];
};

export default useViewSize;
