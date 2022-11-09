import { useAppDispatch, useAppSelector } from '../../store';
import { playerSelector } from '../../selectors';
import { useEffect, useRef, useState } from 'react';
import { setPlayerLevel } from './playerSlice';
import { usePressAndHold } from '../../hooks/usePressAndHold';

const LevelCounter = () => {
  const counterLimit = 76;
  const { counter, setCounter, startCounter, stopCounter } = usePressAndHold(counterLimit, 20);
  const limitIsReached = counter === counterLimit;

  const isDisabled = useRef(false);

  const dispatch = useAppDispatch();
  const player = useAppSelector(playerSelector);

  useEffect(
    () => () => {
      if (limitIsReached) {
        dispatch(setPlayerLevel(player.level + 1));
      }
    },
    [counter],
  );

  if (limitIsReached) {
    stopCounter();
    isDisabled.current = true;
    setTimeout(() => {
      setCounter(0);
      isDisabled.current = false;
    }, 500);
  }

  return (
    <div className="grid grid-rows-1 grid-cols-1 max-w-fit">
      <button
        disabled={isDisabled.current}
        onMouseDown={startCounter}
        onMouseUp={stopCounter}
        className={`
        
        w-20 h-20 p-4
        text-center text-4xl font-extrabold 
        drop-shadow-lg 
         bg-indigo-300
         text-amber-400
          transition-all
          row-start-1 col-start-1
         ${limitIsReached ? 'border-4 border-yellow-400' : 'border-2 border-black'}
         `}
        style={{
          textShadow: '0 0 8px black',
        }}
      >
        {player.level}
      </button>
      <div
        className={` h-[76px] bg-red-200 place-self-center row-start-1 col-start-1 opacity-60 pointer-events-none`}
        style={{ height: `${counter}px`, width: `${counter}px` }}
      ></div>
    </div>
  );
};

export default LevelCounter;
