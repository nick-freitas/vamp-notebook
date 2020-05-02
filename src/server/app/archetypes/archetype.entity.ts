import { Exclude } from 'class-transformer';
import { Archetype } from '../../../shared/models/archetype';

export class ArchetypeEntity implements Archetype {
  name: string;
  description: string;
  regain: string;

  @Exclude()
  createdAt: Date = new Date();

  @Exclude()
  createdBy: string;
}
