import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

import { Injectable } from '@nestjs/common';
import { Schema } from './schema';
import { defaultData } from './defaults';

@Injectable()
export class Datastore {
  db: lowdb.LowdbSync<Schema>;

  constructor() {
    const adapter = new FileSync('./src/server/app/data/db.json');
    this.db = lowdb(adapter);
    this.db.defaults(defaultData).write();
  }
}
