import * as Tooltip from '@radix-ui/react-tooltip';
import { useState } from 'react';
import HealthBar from './features/player/healthBar';
import LevelCounter from './features/player/levelCounter';
import SpellSlots from './features/player/spellSlots';
import SpellBook from './features/spellbook/SpellBook';
import { learnSpell } from './features/spellbook/spellBookSlice';
import SpellCard from './features/spellbook/SpellCard';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  return (
    <Tooltip.Provider>
      <div className="m-4 p-4 w-[40vw] grid grid-cols-[80px_auto] grid-rows-[80px_auto] bg-gradient-to-r from-blue-500">
        <LevelCounter />
        <HealthBar />
      </div>
      <SpellSlots />
      {/* <div className="grid grid-cols-[50vw] m-2 gap-1"> */}
      {/* <div className=""> */}
      {/* </div> */}
      {/* <div className=" justify-self-start"> */}
      {/* </div> */}
      {/* <SpellBook /> */}
      {/* </div> */}
    </Tooltip.Provider>
  );
}

export default App;
