import { Injectable } from '@nestjs/common';
import * as pdffiler from 'pdffiller';
import { CharacterEntity } from './character.entity';
import { CharactersRepository } from './character.repository';
import { CharacterExportService } from './character-export.serivce';

@Injectable()
export class CharactersService {
  constructor(private charactersRepository: CharactersRepository, private characterExportSvc: CharacterExportService) {}

  getCharacters() {
    return this.charactersRepository.getList();
  }

  getCharacter(id: string) {
    return this.charactersRepository.get(id);
  }

  async exportCharacter(id: string) {
    const character: CharacterEntity = await this.getCharacter(id);
    return this.characterExportSvc.export(character);
  }

  createCharacter(character: CharacterEntity) {
    return this.charactersRepository.create(character);
  }

  async updateCharacter(id: string, character: CharacterEntity) {
    const current = await this.getCharacter(id);
    if (!current) {
      return null;
    }

    character.createdAt = new Date();
    character.createdBy = 'nick';
    return this.charactersRepository.update(id, character);
  }

  deleteCharacter(id: string) {
    return this.charactersRepository.delete(id);
  }
}
