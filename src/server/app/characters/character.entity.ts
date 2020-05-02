import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { Character } from '../../../shared/models/character';

export class CharacterEntity extends Character {
  @Exclude()
  createdAt: Date = new Date();

  @Exclude()
  createdBy: string;
}
