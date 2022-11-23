import { levelUpRules } from '../../config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AbilityScores, Class, Race } from '@types';

export interface PlayerState {
  class: Class | undefined;
  race: Race | undefined;
  maxHitPoints: number;
  currentHitPoints: number;
  tempHitPoints: number;
  abilityScores: { scores: AbilityScores; upgradeIsAllowed: boolean };
  proficiencyBonus: number;
  level: number;
  armorClass: number;
  // statusEffects: Partial<Record<'buffs' | 'debuffs', Map<string, { type: string; amount?: number }>>>;
  spellSlots: Record<number, { max: number; current: number }>;
}

const initialState: PlayerState = {
  class: undefined,
  race: undefined,
  maxHitPoints: 100,
  currentHitPoints: 50,
  tempHitPoints: 5,
  abilityScores: {
    scores: {
      STR: 0,
      DEX: 0,
      CON: 0,
      INT: 0,
      WIS: 0,
      CHA: 0,
    },
    upgradeIsAllowed: true,
  },
  armorClass: 10,
  level: 1,
  proficiencyBonus: 2,
  // statusEffects: {
  //   buffs: new Map(),
  //   debuffs: new Map(),
  // },
  spellSlots: {
    1: { max: 4, current: 4 },
    2: { max: 3, current: 1 },
    3: { max: 3, current: 2 },
    4: { max: 3, current: 1 },
    5: { max: 3, current: 1 },
    6: { max: 2, current: 1 },
    7: { max: 2, current: 1 },
    8: { max: 1, current: 1 },
    9: { max: 1, current: 1 },
  },
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    selectClass: (state, action: PayloadAction<Class>) => {
      state.class = action.payload;
    },
    selectRace: (state, action: PayloadAction<Race>) => {
      state.race = action.payload;
    },
    setMaxHitPoints: (state, action: PayloadAction<number>) => {
      state.maxHitPoints = action.payload;
    },
    setTempHitPoints: (state, action: PayloadAction<number>) => {
      state.tempHitPoints = action.payload;
    },
    setCurrentHitPoints: (state, action: PayloadAction<number>) => {
      state.currentHitPoints = action.payload;
    },
    setAbilityScores: (state, action: PayloadAction<Partial<AbilityScores>>) => {
      state.abilityScores = { ...state.abilityScores, ...action.payload };
    },
    setArmorClass: (state, action: PayloadAction<number>) => {
      state.armorClass = action.payload;
    },
    setPlayerLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
      if (state.class) {
        if (levelUpRules[state.class].proficiencyBonusBumpLevels.some(level => action.payload === level)) {
          state.proficiencyBonus++;
        }
        if (levelUpRules[state.class].abilityScoreBumpLevels.some(level => action.payload === level)) {
          state.abilityScores.upgradeIsAllowed === true;
        }
        if (Object.keys(levelUpRules[state.class].spellSlotBumpLevels).some(bumpLevel => +bumpLevel === state.level)) {
          const spellSlotsToBump = levelUpRules[state.class].spellSlotBumpLevels[state.level];
          spellSlotsToBump.forEach(val => {
            state.spellSlots[val[0]] = { ...state.spellSlots[val[0]], max: val[1] };
          });
        }
      }
    },
    // addBuff: (state, action: PayloadAction<{ name: string; effect: { type: string; amount?: number } }>) => {
    //   state.statusEffects.buffs?.set(action.payload.name, action.payload.effect);
    // },
    // addDebuff: (state, action: PayloadAction<{ name: string; effect: { type: string; amount?: number } }>) => {
    //   state.statusEffects.debuffs?.set(action.payload.name, action.payload.effect);
    // },
    // removeBuff: (state, action: PayloadAction<{ name: string }>) => {
    //   state.statusEffects.buffs?.delete(action.payload.name);
    // },
    // removeDebuff: (state, action: PayloadAction<{ name: string }>) => {
    //   state.statusEffects.buffs?.delete(action.payload.name);
    // },
  },
});

export const {
  // addBuff,
  // addDebuff,
  // removeBuff,
  // removeDebuff,
  selectClass,
  selectRace,
  setAbilityScores,
  setArmorClass,
  setCurrentHitPoints,
  setMaxHitPoints,
  setPlayerLevel,
  setTempHitPoints,
} = playerSlice.actions;

export default playerSlice.reducer;
