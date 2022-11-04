import { useState, useRef, useEffect } from 'react';

export const usePressAndHold = (limit: number, shrinkSpeed?: number, growSpeed?: number) => {
  const [counter, setCounter] = useState(0);

  const growIntervalRef = useRef<any>(null);
  const shrinkIntervalRef = useRef<any>(null);

  useEffect(() => () => stopCounter(), []);

  const reverseCounter = async () => {
    if (shrinkIntervalRef.current) return;
    shrinkIntervalRef.current = setInterval(() => {
      setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, shrinkSpeed);
  };

  const startCounter = () => {
    clearInterval(shrinkIntervalRef.current);
    shrinkIntervalRef.current = null;
    if (growIntervalRef.current) return;
    growIntervalRef.current = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, growSpeed || 8);
  };

  const stopCounter = () => {
    if (shrinkSpeed && counter > 0 && counter < limit) {
      reverseCounter();
    }
    if (growIntervalRef.current) {
      clearInterval(growIntervalRef.current);
      growIntervalRef.current = null;
    }
  };

  return { counter, setCounter, startCounter, stopCounter };
};
