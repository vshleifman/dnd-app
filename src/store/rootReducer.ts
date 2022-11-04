import { combineReducers } from '@reduxjs/toolkit';
import spellBookReducer from '../features/spellbook/spellBookSlice';
import playerReducer from '../features/player/playerSlice';

export const rootReducer = combineReducers({
  spellBook: spellBookReducer,
  player: playerReducer,
});
