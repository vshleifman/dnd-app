import { useId } from 'react';
import styled from 'styled-components';

const fillByLevel: Record<number, string[]> = {
  1: ['#828282', '#5b5656', '#3e3939'],
  2: ['#75a375', '#60935e', '#396039'],
  3: ['#82ce49', '#15b34c', '#078507'],
  4: ['#18b1e8', '#0e79a7', '#2959ca'],
  5: ['#000000', '#000000', '#000000'],
  6: ['#3e5cae', '#2f49b1', '#1b2f94'],
  7: ['#8843dc', '#9123cc', '#4a0e6d'],
  8: ['#d5c8e6', '#7e2ae6', '#750e7a'],
  9: ['#b0ef32', '#d8ed3b', '#ebdc0c'],
};

const SpellSlot = ({ isSpent, slotLevel }: { isSpent: boolean; slotLevel: number }) => {
  const [fistColor, secondColor, thirdColor] = fillByLevel[slotLevel];
  const uniqueId = useId();
  const gradient1Id = `Gradient1${uniqueId}`;
  const gradient2Id = `Gradient2${uniqueId}`;
  const gradient3Id = `Gradient3${uniqueId}`;

  return (
    <div
      className="w-fit"
      style={{
        filter: 'drop-shadow(1px 4px 1px rgba(126, 42, 130, 0.8 )',
      }}
    >
      <svg viewBox="0 0 200 500" width="20" height="50">
        <defs>
          <linearGradient id={gradient1Id} x1="1.9" x2="-0.2" y1="0" y2="0">
            <stop offset="0%" stopColor="#d5c8e6" />
            <stop offset="50%" stopColor="#7e2ae6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#750e7a" />
          </linearGradient>

          <linearGradient id={gradient2Id} x1="2" x2="0" y1="0" y2="0">
            <stop offset="0%" stopColor="#d5c8e6" />
            <stop offset="50%" stopColor="#7e2ae6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#750e7a" />
          </linearGradient>

          <linearGradient id={gradient3Id} x1="0" x2="0.5" y1="0" y2="0">
            <stop stopColor={fistColor} offset="0%" />
            <stop stopColor={secondColor} offset="50%" stopOpacity="0.5" />
            <stop stopColor={thirdColor} offset="100%" />
          </linearGradient>
        </defs>
        <polygon
          stroke="gold"
          strokeWidth="4px"
          fill={isSpent ? 'black' : 'white'}
          points="100,0 0,100 0,400 100,500 200,400 200,100"
        />
        <polygon fill={`url(#${gradient1Id})`} points="100,0 100,100 50,150 0,100" />
        <polygon fill={`url(#${gradient1Id})`} points="0,100 50,150, 50,350 0,400" />
        <polygon fill={`url(#${gradient1Id})`} points="100,500 100,400 50,350 0,400" />
        <polygon fill={`url(#${gradient2Id})`} points="100,500 100,400 150,350 200,400" />
        <polygon fill={`url(#${gradient2Id})`} points="200,400 150,350 150,150 200,100" />
        <polygon fill={`url(#${gradient2Id})`} points="100,0 100,100 150,150 200,100" />
        <polygon fill={`url(#${gradient3Id})`} points="50,150 50,350 100,400 150,350 150,350 150,150 100,100" />
      </svg>
    </div>
  );
};

export default SpellSlot;
