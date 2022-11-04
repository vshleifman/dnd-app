import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_SPELLS } from '../../api/queries';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SpellData } from '../../types';
import { learnSpell } from './spellBookSlice';
import SpellCard from './SpellCard';

const SpellBook = () => {
  const [spell, setSpell] = useState<string>('');

  const knownSpells = useAppSelector(state => state.spellBook.knownSpells);
  const preparedSpells = useAppSelector(state => state.spellBook.preparedSpells);

  const dispatch = useAppDispatch();
  const { loading, error, data } = useQuery(GET_SPELLS, {
    variables: { name: 'wizard', order: { direction: 'ASCENDING', by: 'LEVEL' }, limit: 10000 },
  });

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="grid">
            {data.classes[0].spells.map((spell: SpellData) => (
              <SpellCard key={spell.name} data={spell} />
            ))}
          </div>
          <button className="border-2 bg-slate-500" onClick={() => dispatch(learnSpell(spell))}>
            Add Spell
          </button>
          <input
            onChange={event => setSpell(event.target.value)}
            className="border-2 border-black"
            id="spell"
            type="text"
            value={spell}
          />
          <span>
            {knownSpells.map(spell => (
              <p key={spell}>{spell}</p>
            ))}
          </span>
        </>
      )}
    </>
  );
};

export default SpellBook;
