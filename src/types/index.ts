export enum Class {
  BARBARIAN = 'barbarian',
  BARD = 'bard',
  CLERIC = 'cleric',
  DRUID = 'druid',
  FIGHTER = 'fighter',
  MONK = 'monk',
  PALADIN = 'paladin',
  RANGER = 'ranger',
  ROGUE = 'rogue',
  SORCERER = 'sorcerer',
  WARLOCK = 'warlock',
  WIZARD = 'wizard',
}

export enum Race {
  SHADARKAI = 'shadarkai',
  ELF = 'elf',
}

export interface SpellData {
  level: string;
  name: string;
  components: string[];
  material: string;
  school: { name: string };
  casting_time: string;
  duration: string;
  dc: { full_name: string };
  range: string;
  concentration: boolean;
  ritual: boolean;
  higher_level: string;
  aoeSize: string;
  aoeType: string;
  damage: {
    damage_at_character_level: {
      damage: string;
      level: string;
    };
    damage_at_slot_level: {
      damage: string;
      level: string;
    };
  };
  desc: string[];
}

enum StrSkills {
  ATHLETICS = 'athletics',
}

enum DexSkills {
  ACROBATICS = 'acrobatics',
  SLEIGHT_OF_HAND = 'sleigth of hand',
  STEALTH = 'stealth',
}

enum IntSkills {
  ARCANA = 'arcana',
  HISTORY = 'history',
  INVESTIGATION = 'investigation',
  NATURE = 'nature',
  RELIGION = 'religion',
}

enum WisSkills {
  ANIMAL_HANDLING = 'animal handling',
  INSIGHT = 'insight',
  MEDICINE = 'medicine',
  PERCEPTION = 'perception',
  SURVIVAL = 'survival',
}

enum ChaSkills {
  DECEPTION = 'deception',
  INTIMIDATION = 'intimidation',
  PERFORMANCE = 'performance',
  PERSUASION = 'persuasion',
}

export const Skills = {
  STR: StrSkills,
  DEX: DexSkills,
  INT: IntSkills,
  WIS: WisSkills,
  CHA: ChaSkills,
};

const abilities = {
  STR: 'strength',
  DEX: 'dexterity',
  CON: 'constitution',
  INT: 'inteligence',
  WIS: 'wisdom',
  CHA: 'charisma',
};

export enum abilitiesEnum {
  STR = 'strength',
  DEX = 'dexterity',
  CON = 'constitution',
  INT = 'inteligence',
  WIS = 'wisdom',
  CHA = 'charisma',
}

export type AbilityScores = Record<keyof typeof abilities, number>;

export enum Conditions {
  CHARMED = 'Charmed',
  DEAFENED = 'Deafened',
  FRIGHTENED = 'Frightened',
  GRAPPLED = 'Grappled',
  INCAPACITATED = 'Incapacitated',
  BLINDED = 'Blinded',
  INVISIBLE = 'Invisible',
  PETRIFIED = 'Petrified',
  PARALYZED = 'Paralyzed',
  POISONED = 'Poisoned',
  RESTRAINED = 'Restrained',
  PRONE = 'Prone',
  STUNNED = 'Stunned',
  UNCONSCIOUS = 'Unconscious',
  EXHAUSTION = 'Exhaustion',
}

export enum DamageTypes {
  BLUDGEONING = 'Bludgeoning',
  COLD = 'Cold',
  FIRE = 'Fire',
  FORCE = 'Force',
  LIGHTNING = 'Lightning',
  ACID = 'Acid',
  NECROTIC = 'Necrotic',
  POISON = 'Poison',
  PIERCING = 'Piercing',
  RADIANT = 'Radiant',
  SLASHING = 'Slashing',
  THUNDER = 'Thunder',
  PSYCHIC = 'Psychic',
}
