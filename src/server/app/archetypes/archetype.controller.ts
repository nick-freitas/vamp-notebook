import { Param, Put, Post, Get, Delete, Body, Controller } from '@nestjs/common';
import { ArchetypeEntity } from './archetype.entity';
import { ArchetypesService } from './archetype.service';

@Controller('archetypes')
export class ArchetypesController {
  constructor(private archetypesService: ArchetypesService) {}

  @Get()
  async getArchetypes() {
    return this.archetypesService.getArchetypes();
  }
}
