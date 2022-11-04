import { Conditions, Skills, DamageTypes } from './../../types/index';

export const initialRaceState = {
  shadarkai: {
    proficiencies: {
      skills: [Skills.WIS.PERCEPTION],
    },
    advantage: [Conditions.CHARMED],
    abilityScoreIncrease: {
      specific: {},
      nonSpecific: { total: 3, maxPerSkill: 2 },
    },
    resistances: [DamageTypes.NECROTIC],
  },
};
