import { Injectable } from '@nestjs/common';
import * as pdffiler from 'pdffiller';
import * as fs from 'fs';
import { CharacterEntity } from './character.entity';
import { Readable } from 'stream';

@Injectable()
export class CharacterExportService {
  constructor() {}

  public async export(character: CharacterEntity): Promise<{ stream: Readable; length: number }> {
    return new Promise(async (resolve, reject) => {
      const src = this.getSheetSource(character.sheetType);

      const convMapSrc = this.getConvMapSource(character.sheetType);
      const convMap = JSON.parse(await this.getFileFromPath(convMapSrc));
      const invertedConvMap = {};
      Object.keys(convMap).map(key => (invertedConvMap[convMap[key]] = key));

      const destinationDebug = 'src/server/assets/TestCharacter.pdf';
      const fieldJson = this.getFieldJson(character);

      const mappedFields = pdffiler.mapForm2PDF(fieldJson, invertedConvMap);
      delete mappedFields.undefined;
      //   console.debug(`fieldJson: ${JSON.stringify(fieldJson)}`);
      //   console.debug(`convMapSrc: ${JSON.stringify(convMapSrc)}`);
      //console.debug(`convMap: ${JSON.stringify(convMap)}`);
      // console.debug(`mappedFields: ${JSON.stringify(mappedFields)}`);
      pdffiler.fillForm(src, destinationDebug, mappedFields, async err => {
        if (err) return reject(err);

        const buffer = await this.getFileFromPath(destinationDebug);
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);

        return resolve({ stream, length: buffer.length });
      });
    });
  }

  getFieldJson(character: CharacterEntity): any {
    const initial = Object.keys(character).map(key => ({
      title: key,
      fieldfieldType: 'Text',
      fieldValue: character[key]
    }));

    const dots = [];

    //todo: add "health_dot7"
    for (let i = 1; i <= 10; i++) {
      dots.push(
        {
          title: `willpower_dot${i}`,
          fieldfieldType: 'Button',
          fieldValue: character.maxWillpower <= i
        },
        {
          title: `willpower_box${i}`,
          fieldfieldType: 'Button',
          fieldValue: character.willpower <= i
        },
        {
          title: `humanity_dot${i}`,
          fieldfieldType: 'Button',
          fieldValue: character.humanity <= i
        }
      );
    }

    for (let i = 1; i <= 20; i++) {
      dots.push({
        title: `bloodPool_box${i}`,
        fieldfieldType: 'Button',
        fieldValue: character.bloodPool <= i
      });
    }

    return [...initial, ...dots];
  }

  private async getFileFromPath(source: string): Promise<any> {
    return new Promise((resolve, reject) => {
      return fs.readFile(source, (err, data) => (err ? reject(err) : resolve(data)));
    });
  }

  private getSheetSource(type: string): string {
    switch (type) {
      case 'Neonate':
      default:
        return 'src/server/assets/NeonateSheet.pdf';
    }
  }

  private getConvMapSource(type: string): string {
    switch (type) {
      case 'Neonate':
      default:
        return 'src/server/assets/NeonateSheet.conv-map.json';
    }
  }
}
