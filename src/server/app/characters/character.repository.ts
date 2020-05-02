import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { plainToClass } from 'class-transformer';
import { Datastore } from '../data/datastore';
import { CharacterEntity } from './character.entity';

@Injectable()
export class CharactersRepository {
  constructor(private datastore: Datastore) {}

  async getList(params: any = {}) {
    let db = this.datastore.db.get('characters');
    if (params.sort) {
      db = db.sortBy(params.sort);
    } else {
      db = db.sortBy(['clan', 'name']);
    }

    if (params.page && params.pageSize) {
      db = db.slice((params.page - 1) * params.pageSize).take(params.pageSize);
    }

    return await db.value().map(x => {
      const entity = plainToClass(CharacterEntity, x, {
        ignoreDecorators: true
      });
      return entity;
    });
  }

  async get(id: string) {
    const dbRecord = await this.datastore.db
      .get('characters')
      .find(x => x.id === id)
      .value();
    if (dbRecord) {
      dbRecord.createdAt = new Date(dbRecord.createdAt);
      return plainToClass(CharacterEntity, dbRecord, {
        ignoreDecorators: true
      });
    }
  }

  async create(character: CharacterEntity) {
    this.validate(character);
    character.id = Date.now().toString();

    this.datastore.db
      .get('characters')
      .push(character)
      .write();
    return await character;
  }

  async update(id: string, character: CharacterEntity) {
    this.validate(character);
    this.datastore.db
      .get('characters')
      .find(x => (x.id as any) === id)
      .assign(character)
      .write();
    return await character;
  }

  async delete(id: string) {
    this.datastore.db
      .get('characters')
      .remove({ id })
      .write();
  }

  private validate(character: CharacterEntity) {
    if (!character.name) {
      throw new Error('DBConstraint error: name is required');
    }
    if (!character.createdBy) {
      throw new Error('DBConstraint error: CreatedBy is required');
    }
    if (!character.createdAt || !_.isDate(character.createdAt)) {
      throw new Error('DBConstraint error: CreatedAt is invalid or not sent');
    }
  }
}
