import { ArchetypeEntity } from './archetype.entity';
import { ArchetypesRepository } from './archetype.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArchetypesService {
  constructor(private archetypesRepository: ArchetypesRepository) {}

  getArchetypes() {
    return this.archetypesRepository.getList();
  }
}
