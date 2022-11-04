import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SpellBookState {
  knownSpells: string[];
  preparedSpells: string[];
}

const initialState: SpellBookState = {
  knownSpells: [],
  preparedSpells: [],
};

export const spellBookSlice = createSlice({
  name: 'spellBook',
  initialState,
  reducers: {
    learnSpell: (state, action: PayloadAction<string>) => {
      state.knownSpells.push(action.payload);
    },
    prepareSpell: (state, action: PayloadAction<string>) => {
      state.preparedSpells.push(action.payload);
    },
    unprepareSpell: (state, action: PayloadAction<string>) => {
      state.preparedSpells.splice(state.preparedSpells.indexOf(action.payload), 1);
    },
  },
});

export const { learnSpell, prepareSpell, unprepareSpell } = spellBookSlice.actions;

export default spellBookSlice.reducer;
