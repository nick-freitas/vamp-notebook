import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { plainToClass } from 'class-transformer';
import { Datastore } from '../data/datastore';
import { ArchetypeEntity } from './archetype.entity';

@Injectable()
export class ArchetypesRepository {
  constructor(private datastore: Datastore) {}

  async getList(params: any = {}) {
    let db = this.datastore.db.get('archetypes');
    if (params.sort) {
      db = db.sortBy(params.sort);
    } else {
      db = db.sortBy(['name']);
    }

    if (params.page && params.pageSize) {
      db = db.slice((params.page - 1) * params.pageSize).take(params.pageSize);
    }

    return await db.value().map(x => {
      const entity = plainToClass(ArchetypeEntity, x, {
        ignoreDecorators: true
      });
      return entity;
    });
  }
}
