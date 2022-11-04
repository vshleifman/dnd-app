import { Class } from '@types';

interface IDefaultLevelUpRules {
  proficiencyBonusBumpLevels: number[];
  abilityScoreBumpLevels: number[];
  spellSlotBumpLevels: Record<number, number[][]>;
  cantripBumpLevels: number[];
  hitDiePerLevel: number;
}

type ILevelUpRules = Record<Class, IDefaultLevelUpRules>;

const fullSpellSlotBumpLevels = {
  2: [[1, 3]],
  3: [
    [1, 4],
    [2, 2],
  ],
  4: [[2, 3]],
  5: [[3, 2]],
  6: [[3, 3]],
  7: [[4, 1]],
  8: [[4, 2]],
  9: [
    [4, 3],
    [5, 1],
  ],
  10: [[5, 2]],
  11: [[6, 1]],
  13: [[7, 1]],
  15: [[8, 1]],
  17: [[9, 1]],
  18: [[5, 3]],
  19: [[6, 2]],
  20: [[7, 2]],
};

const halfSpellSlotBumpLevels = {
  2: [[1, 2]],
  3: [[1, 3]],
  5: [
    [1, 4],
    [2, 2],
  ],
  7: [[2, 3]],
  9: [[3, 2]],
  11: [[3, 3]],
  13: [[4, 1]],
  15: [[4, 2]],
  17: [
    [4, 3],
    [5, 1],
  ],
  19: [[5, 2]],
};

const defaultLevelUpRules: IDefaultLevelUpRules = {
  abilityScoreBumpLevels: [4, 8, 12, 16, 19],
  proficiencyBonusBumpLevels: [5, 9, 13, 17],
  cantripBumpLevels: [4, 10],
  spellSlotBumpLevels: fullSpellSlotBumpLevels,
  hitDiePerLevel: 8,
};

export const levelUpRules: ILevelUpRules = {
  barbarian: {
    ...defaultLevelUpRules,
    cantripBumpLevels: [],
    spellSlotBumpLevels: [],
    hitDiePerLevel: 12,
  },
  bard: {
    ...defaultLevelUpRules,
  },
  cleric: {
    ...defaultLevelUpRules,
  },
  druid: {
    ...defaultLevelUpRules,
  },
  fighter: {
    ...defaultLevelUpRules,
    abilityScoreBumpLevels: [4, 6, 8, 12, 14, 16, 19],
    cantripBumpLevels: [],
    spellSlotBumpLevels: [],
    hitDiePerLevel: 10,
  },
  monk: {
    ...defaultLevelUpRules,
    cantripBumpLevels: [],
    spellSlotBumpLevels: [],
  },
  paladin: {
    ...defaultLevelUpRules,
    cantripBumpLevels: [],
    spellSlotBumpLevels: halfSpellSlotBumpLevels,
    hitDiePerLevel: 10,
  },
  ranger: {
    ...defaultLevelUpRules,
    cantripBumpLevels: [],
    spellSlotBumpLevels: halfSpellSlotBumpLevels,
    hitDiePerLevel: 10,
  },
  rogue: {
    ...defaultLevelUpRules,
    abilityScoreBumpLevels: [4, 8, 10, 12, 16, 19],
    cantripBumpLevels: [],
    spellSlotBumpLevels: [],
  },
  sorcerer: {
    ...defaultLevelUpRules,
    hitDiePerLevel: 6,
  },
  warlock: {
    ...defaultLevelUpRules,
  },
  wizard: {
    ...defaultLevelUpRules,
    hitDiePerLevel: 6,
  },
};
