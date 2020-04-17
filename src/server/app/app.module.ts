import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersService } from './characters/character.service';
import { CharactersController } from './characters/character.controller';
import { CharactersRepository } from './characters/character.repository';
import { Datastore } from './data/datastore';
import { ArchetypesController } from './archetypes/archetype.controller';
import { ArchetypesRepository } from './archetypes/archetype.repository';
import { ArchetypesService } from './archetypes/archetype.service';
import { CharacterExportService } from './characters/character-export.serivce';

@Module({
  imports: [],
  controllers: [AppController, CharactersController, ArchetypesController],
  providers: [AppService, Datastore, CharactersRepository, CharactersService, ArchetypesRepository, ArchetypesService, CharacterExportService]
})
export class AppModule {}
