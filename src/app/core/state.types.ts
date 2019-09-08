export interface StatField {
  name: string;
  text: string;
  maxDots?: number;
  dots?: number;
  hasAdvantage?: boolean;
  advantege?: string;
}

export interface SheetHeaderFields {
  text: string;
  name: string;
  inputType?: string;
  selectionOptionList?: any[];
  editWarning?: string;
}

export interface SheetAttributesField {
  type: string;
  attributes: StatField[];
}

export interface SheetAbilitiesField {
  type: string;
  abilities: StatField[];
}

// Generated by https://quicktype.io

export interface TopLevel {
  defaults: Defaults;
  characterSheetFields: CharacterSheetFields;
  users: User[];
}

export interface CharacterSheetFields {
  coreHeaderFieldList: HeaderFieldList[];
  subHeaderFieldList: SubHeaderFieldList[];
  conceptHeaderFieldList: HeaderFieldList[];
  attributesFieldList: AttributesFieldList[];
  abilitiesFieldList: AbilitiesFieldList[];
}

export interface AbilitiesFieldList {
  type: string;
  abilities: SubHeaderFieldList[];
}

export interface SubHeaderFieldList {
  name: string;
  text: string;
}

export interface AttributesFieldList {
  type: string;
  attributes: SubHeaderFieldList[];
}

export interface HeaderFieldList {
  name: string;
  text: string;
  inputType?: string;
  editWarning?: string;
}

export interface Defaults {
  clans: string[];
}

export interface User {
  id: string;
  username: string;
  lastSelectedChronicle: string;
  chronicles: Chronicle[];
}

export interface Chronicle {
  id: string;
  name: string;
  lastSelectedCharacter: null | string;
  clans: Clan[];
}

export interface Clan {
  name: string;
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  clan: string;
  imageUrl: string;
  nature: string;
  demeanor: string;
  sire?: string;
  generation: number;
  concept: string;
  lastSelectedNote: null | string;
  stats: Stats;
  notes: Note[];
}

export interface Note {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

export interface Stats {
  strength?: Dexterity;
  dexterity?: Dexterity;
}

export interface Dexterity {
  value: number;
  advantage: null | string;
}
