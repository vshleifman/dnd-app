import { abilitiesEnum, Skills } from '../../types';

export const initialClassState = {
  wizard: {
    hitPoints: 6,
    proficiencies: {
      armor: undefined,
      weapons: ['Crossbows, light', 'Daggers', ' Darts', 'Quarterstaffs', 'Slings'],
      savingThrows: [abilitiesEnum.INT, abilitiesEnum.WIS],
      skills: {
        selection: [
          Skills.INT.ARCANA,
          Skills.INT.HISTORY,
          Skills.INT.INVESTIGATION,
          Skills.INT.RELIGION,
          Skills.WIS.MEDICINE,
        ],
        amount: 2,
      },
      spellSlots: {
        1: { max: 2, current: 2 },
      },
    },
  },
};
