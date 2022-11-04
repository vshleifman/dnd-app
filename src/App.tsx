import { useState } from 'react';
import LevelCounter from './features/player/levelCounter';
import SpellBook from './features/spellbook/SpellBook';
import { learnSpell } from './features/spellbook/spellBookSlice';
import SpellCard from './features/spellbook/SpellCard';
import { useAppDispatch, useAppSelector } from './store/hooks';

function App() {
  return (
    <div className="flex">
      <LevelCounter />
      <div>hi</div>
      {/* <SpellBook /> */}
    </div>
  );
}

export default App;
