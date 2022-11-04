import { gql } from '@apollo/client';

export const GET_SPELLS = gql`
  query GetSpells($name: String, $order: SpellOrder, $school: StringFilter, $limit: Int!) {
    classes(name: $name) {
      spells(order: $order, school: $school, limit: $limit) {
        level
        name
        components
        material
        school {
          name
        }
        casting_time
        duration
        dc {
          type {
            full_name
          }
        }
        range
        concentration
        ritual
        higher_level
        area_of_effect {
          size
          type
        }
        damage {
          damage_at_character_level {
            damage
            level
          }
          damage_at_slot_level {
            damage
            level
          }
        }
        desc
      }
    }
  }
`;
