import { Param, Put, Post, Get, Delete, Body, Controller } from '@nestjs/common';
import { CharacterEntity } from './character.entity';
import { CharactersService } from './character.service';

@Controller('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  async getCharacters() {
    return this.charactersService.getCharacters();
  }

  @Get(':id')
  async getCharacter(@Param('id') id: string) {
    return this.charactersService.getCharacter(id);
  }

  @Post(':id/export')
  async exportCharacter(@Param('id') id: string) {
    return this.charactersService.exportCharacter(id);
  }

  @Post()
  async createCharacter(@Body() character: CharacterEntity) {
    return this.charactersService.createCharacter(character);
  }

  @Put(':id')
  async updateCharacter(@Param('id') id: string, @Body() character: CharacterEntity) {
    return this.charactersService.updateCharacter(id, character);
  }

  @Delete(':id')
  async deleteCharacter(@Param('id') id: string) {
    return this.charactersService.deleteCharacter(id);
  }
}
