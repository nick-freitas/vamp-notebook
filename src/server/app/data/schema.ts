import { CharacterEntity } from '../characters/character.entity';
import { ArchetypeEntity } from '../archetypes/archetype.entity';

export interface Schema {
  characters: CharacterEntity[];
  chronicles: any[];
  archetypes: ArchetypeEntity[];
}
