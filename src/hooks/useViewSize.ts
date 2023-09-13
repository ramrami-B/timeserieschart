'use client';
import { useEffect, useState } from 'react';

const useViewSize = () => {
  const [viewwWidth, setViewWidth] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
    setViewHeight(window.innerHeight);
  }, []);

  return [viewwWidth, viewHeight];
};

export default useViewSize;
