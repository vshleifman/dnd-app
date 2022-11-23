import { useState } from 'react';
import { playerSelector } from '../../selectors';
import { useAppSelector } from '../../store';
import SpellSlot from './spellSlot';

const SpellSlots = () => {
  const player = useAppSelector(playerSelector);

  const mapper = (spellLevel: number) => {
    const maxSlotAmount = player.spellSlots[spellLevel].max;
    const currentSlotAmount = player.spellSlots[spellLevel].current;
    const res = [];

    for (let i = 1; i <= maxSlotAmount; i++) {
      res.push(
        <div
          key={i}
          style={{
            zIndex: maxSlotAmount - i,
          }}
        >
          <SpellSlot slotLevel={spellLevel} isSpent={i <= currentSlotAmount ? false : true} />
        </div>,
      );
    }
    return (
      <div
        className="grid"
        style={{
          gridTemplateRows: `repeat(${maxSlotAmount}, 10px)`,
        }}
      >
        {res}
      </div>
    );
  };

  return (
    <>
      <div className="grid border border-black w-fit">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${Object.keys(player.spellSlots).length}, 1fr)`,
          }}
        >
          {Object.keys(player.spellSlots).map(spellLevel => (
            <div key={spellLevel} className="px-2 grid place-items-center">
              {spellLevel}
            </div>
          ))}

          {Object.keys(player.spellSlots).map(spellLevel => (
            <div key={spellLevel} className="px-2 grid ">
              {mapper(Number(spellLevel))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SpellSlots;
