import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bit: any;
  uuid: any;
};




/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type RegisterUserOutput = {
  __typename?: 'RegisterUserOutput';
  name: Scalars['String'];
  uuid: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "bit". All fields are combined with logical 'AND'. */
export type Bit_Comparison_Exp = {
  _eq?: Maybe<Scalars['bit']>;
  _gt?: Maybe<Scalars['bit']>;
  _gte?: Maybe<Scalars['bit']>;
  _in?: Maybe<Array<Scalars['bit']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bit']>;
  _lte?: Maybe<Scalars['bit']>;
  _neq?: Maybe<Scalars['bit']>;
  _nin?: Maybe<Array<Scalars['bit']>>;
};

/** columns and relationships of "characters" */
export type Characters = {
  __typename?: 'characters';
  academics?: Maybe<Scalars['Int']>;
  academicsprof?: Maybe<Scalars['String']>;
  agecategory?: Maybe<Scalars['String']>;
  alertness?: Maybe<Scalars['Int']>;
  alertnessprof?: Maybe<Scalars['String']>;
  animalken?: Maybe<Scalars['Int']>;
  animalkenprof?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['Int']>;
  appearanceprof?: Maybe<Scalars['String']>;
  athletics?: Maybe<Scalars['Int']>;
  athleticsprof?: Maybe<Scalars['String']>;
  awareness?: Maybe<Scalars['Int']>;
  awarenessprof?: Maybe<Scalars['String']>;
  backgroundname1?: Maybe<Scalars['String']>;
  backgroundname2?: Maybe<Scalars['String']>;
  backgroundname3?: Maybe<Scalars['String']>;
  backgroundname4?: Maybe<Scalars['String']>;
  backgroundname5?: Maybe<Scalars['String']>;
  backgroundname6?: Maybe<Scalars['String']>;
  backgroundnote?: Maybe<Scalars['String']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  backgroundprof1?: Maybe<Scalars['String']>;
  backgroundprof2?: Maybe<Scalars['String']>;
  backgroundprof3?: Maybe<Scalars['String']>;
  backgroundprof4?: Maybe<Scalars['String']>;
  backgroundprof5?: Maybe<Scalars['String']>;
  backgroundprof6?: Maybe<Scalars['String']>;
  bearing?: Maybe<Scalars['String']>;
  bearingmodifier?: Maybe<Scalars['String']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  brawlprof?: Maybe<Scalars['String']>;
  charisma?: Maybe<Scalars['Int']>;
  charismaprof?: Maybe<Scalars['String']>;
  chronicle?: Maybe<Scalars['String']>;
  chronicledescription?: Maybe<Scalars['String']>;
  clan?: Maybe<Scalars['String']>;
  combodisciplinename1?: Maybe<Scalars['String']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  combodisciplineprof1?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['Int']>;
  computerprof?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  demeanor?: Maybe<Scalars['String']>;
  demeanordescription?: Maybe<Scalars['String']>;
  descriptionnote?: Maybe<Scalars['String']>;
  dexterity?: Maybe<Scalars['Int']>;
  dexterityprof?: Maybe<Scalars['String']>;
  disciplinename1?: Maybe<Scalars['String']>;
  disciplinename2?: Maybe<Scalars['String']>;
  disciplinename3?: Maybe<Scalars['String']>;
  disciplinename4?: Maybe<Scalars['String']>;
  disciplinename5?: Maybe<Scalars['String']>;
  disciplinename6?: Maybe<Scalars['String']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  disciplineprof1?: Maybe<Scalars['String']>;
  disciplineprof2?: Maybe<Scalars['String']>;
  disciplineprof3?: Maybe<Scalars['String']>;
  disciplineprof4?: Maybe<Scalars['String']>;
  disciplineprof5?: Maybe<Scalars['String']>;
  disciplineprof6?: Maybe<Scalars['String']>;
  drive?: Maybe<Scalars['Int']>;
  driveprof?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Int']>;
  empathyprof?: Maybe<Scalars['String']>;
  etiquette?: Maybe<Scalars['Int']>;
  etiquetteprof?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  expressionprof?: Maybe<Scalars['String']>;
  extraknowledgename?: Maybe<Scalars['String']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraknowledgeprof?: Maybe<Scalars['String']>;
  extraskillname?: Maybe<Scalars['String']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extraskillprof?: Maybe<Scalars['String']>;
  extratalentname?: Maybe<Scalars['String']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  extratalentprof?: Maybe<Scalars['String']>;
  finance?: Maybe<Scalars['Int']>;
  financeprof?: Maybe<Scalars['String']>;
  firearms?: Maybe<Scalars['Int']>;
  firearmsprof?: Maybe<Scalars['String']>;
  flawname1?: Maybe<Scalars['String']>;
  flawname2?: Maybe<Scalars['String']>;
  flawname3?: Maybe<Scalars['String']>;
  flawname4?: Maybe<Scalars['String']>;
  flawname5?: Maybe<Scalars['String']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  flawprof1?: Maybe<Scalars['String']>;
  flawprof2?: Maybe<Scalars['String']>;
  flawprof3?: Maybe<Scalars['String']>;
  flawprof4?: Maybe<Scalars['String']>;
  flawprof5?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  generationdescription?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intelligenceprof?: Maybe<Scalars['String']>;
  intimidation?: Maybe<Scalars['Int']>;
  intimidationprof?: Maybe<Scalars['String']>;
  investigation?: Maybe<Scalars['Int']>;
  investigationprof?: Maybe<Scalars['String']>;
  larceny?: Maybe<Scalars['Int']>;
  larcenyprof?: Maybe<Scalars['String']>;
  law?: Maybe<Scalars['Int']>;
  lawprof?: Maybe<Scalars['String']>;
  leadership?: Maybe<Scalars['Int']>;
  leadershipprof?: Maybe<Scalars['String']>;
  manipulation?: Maybe<Scalars['Int']>;
  manipulationprof?: Maybe<Scalars['String']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  medicineprof?: Maybe<Scalars['String']>;
  melee?: Maybe<Scalars['Int']>;
  meleeprof?: Maybe<Scalars['String']>;
  meritname1?: Maybe<Scalars['String']>;
  meritname2?: Maybe<Scalars['String']>;
  meritname3?: Maybe<Scalars['String']>;
  meritname4?: Maybe<Scalars['String']>;
  meritname5?: Maybe<Scalars['String']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  meritprof1?: Maybe<Scalars['String']>;
  meritprof2?: Maybe<Scalars['String']>;
  meritprof3?: Maybe<Scalars['String']>;
  meritprof4?: Maybe<Scalars['String']>;
  meritprof5?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
  naturedescription?: Maybe<Scalars['String']>;
  natureregain?: Maybe<Scalars['String']>;
  occult?: Maybe<Scalars['Int']>;
  occultprof?: Maybe<Scalars['String']>;
  othernotes?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  perception?: Maybe<Scalars['Int']>;
  perceptionprof?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['Int']>;
  performanceprof?: Maybe<Scalars['String']>;
  politics?: Maybe<Scalars['Int']>;
  politicsprof?: Maybe<Scalars['String']>;
  roleplayinghints?: Maybe<Scalars['String']>;
  science?: Maybe<Scalars['Int']>;
  scienceprof?: Maybe<Scalars['String']>;
  sect?: Maybe<Scalars['String']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  sheettype?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Int']>;
  staminaprof?: Maybe<Scalars['String']>;
  stealth?: Maybe<Scalars['Int']>;
  stealthprof?: Maybe<Scalars['String']>;
  streetwise?: Maybe<Scalars['Int']>;
  streetwiseprof?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strengthprof?: Maybe<Scalars['String']>;
  subterfuge?: Maybe<Scalars['Int']>;
  subterfugeprof?: Maybe<Scalars['String']>;
  survival?: Maybe<Scalars['Int']>;
  survivalprof?: Maybe<Scalars['String']>;
  technology?: Maybe<Scalars['Int']>;
  technologyprof?: Maybe<Scalars['String']>;
  useconviction?: Maybe<Scalars['bit']>;
  useinstinct?: Maybe<Scalars['bit']>;
  usepath?: Maybe<Scalars['bit']>;
  user_id?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
  weakness?: Maybe<Scalars['String']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
  witsprof?: Maybe<Scalars['String']>;
};

/** aggregated selection of "characters" */
export type Characters_Aggregate = {
  __typename?: 'characters_aggregate';
  aggregate?: Maybe<Characters_Aggregate_Fields>;
  nodes: Array<Characters>;
};

/** aggregate fields of "characters" */
export type Characters_Aggregate_Fields = {
  __typename?: 'characters_aggregate_fields';
  avg?: Maybe<Characters_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Characters_Max_Fields>;
  min?: Maybe<Characters_Min_Fields>;
  stddev?: Maybe<Characters_Stddev_Fields>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Fields>;
  sum?: Maybe<Characters_Sum_Fields>;
  var_pop?: Maybe<Characters_Var_Pop_Fields>;
  var_samp?: Maybe<Characters_Var_Samp_Fields>;
  variance?: Maybe<Characters_Variance_Fields>;
};


/** aggregate fields of "characters" */
export type Characters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Characters_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Characters_Avg_Fields = {
  __typename?: 'characters_avg_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "characters". All fields are combined with a logical 'AND'. */
export type Characters_Bool_Exp = {
  _and?: Maybe<Array<Characters_Bool_Exp>>;
  _not?: Maybe<Characters_Bool_Exp>;
  _or?: Maybe<Array<Characters_Bool_Exp>>;
  academics?: Maybe<Int_Comparison_Exp>;
  academicsprof?: Maybe<String_Comparison_Exp>;
  agecategory?: Maybe<String_Comparison_Exp>;
  alertness?: Maybe<Int_Comparison_Exp>;
  alertnessprof?: Maybe<String_Comparison_Exp>;
  animalken?: Maybe<Int_Comparison_Exp>;
  animalkenprof?: Maybe<String_Comparison_Exp>;
  appearance?: Maybe<Int_Comparison_Exp>;
  appearanceprof?: Maybe<String_Comparison_Exp>;
  athletics?: Maybe<Int_Comparison_Exp>;
  athleticsprof?: Maybe<String_Comparison_Exp>;
  awareness?: Maybe<Int_Comparison_Exp>;
  awarenessprof?: Maybe<String_Comparison_Exp>;
  backgroundname1?: Maybe<String_Comparison_Exp>;
  backgroundname2?: Maybe<String_Comparison_Exp>;
  backgroundname3?: Maybe<String_Comparison_Exp>;
  backgroundname4?: Maybe<String_Comparison_Exp>;
  backgroundname5?: Maybe<String_Comparison_Exp>;
  backgroundname6?: Maybe<String_Comparison_Exp>;
  backgroundnote?: Maybe<String_Comparison_Exp>;
  backgroundpoints1?: Maybe<Int_Comparison_Exp>;
  backgroundpoints2?: Maybe<Int_Comparison_Exp>;
  backgroundpoints3?: Maybe<Int_Comparison_Exp>;
  backgroundpoints4?: Maybe<Int_Comparison_Exp>;
  backgroundpoints5?: Maybe<Int_Comparison_Exp>;
  backgroundpoints6?: Maybe<Int_Comparison_Exp>;
  backgroundprof1?: Maybe<String_Comparison_Exp>;
  backgroundprof2?: Maybe<String_Comparison_Exp>;
  backgroundprof3?: Maybe<String_Comparison_Exp>;
  backgroundprof4?: Maybe<String_Comparison_Exp>;
  backgroundprof5?: Maybe<String_Comparison_Exp>;
  backgroundprof6?: Maybe<String_Comparison_Exp>;
  bearing?: Maybe<String_Comparison_Exp>;
  bearingmodifier?: Maybe<String_Comparison_Exp>;
  bloodperturn?: Maybe<Int_Comparison_Exp>;
  bloodpool?: Maybe<Int_Comparison_Exp>;
  brawl?: Maybe<Int_Comparison_Exp>;
  brawlprof?: Maybe<String_Comparison_Exp>;
  charisma?: Maybe<Int_Comparison_Exp>;
  charismaprof?: Maybe<String_Comparison_Exp>;
  chronicle?: Maybe<String_Comparison_Exp>;
  chronicledescription?: Maybe<String_Comparison_Exp>;
  clan?: Maybe<String_Comparison_Exp>;
  combodisciplinename1?: Maybe<String_Comparison_Exp>;
  combodisciplinepoints1?: Maybe<Int_Comparison_Exp>;
  combodisciplineprof1?: Maybe<String_Comparison_Exp>;
  computer?: Maybe<Int_Comparison_Exp>;
  computerprof?: Maybe<String_Comparison_Exp>;
  concept?: Maybe<String_Comparison_Exp>;
  conscience?: Maybe<Int_Comparison_Exp>;
  courage?: Maybe<Int_Comparison_Exp>;
  crafts?: Maybe<Int_Comparison_Exp>;
  demeanor?: Maybe<String_Comparison_Exp>;
  demeanordescription?: Maybe<String_Comparison_Exp>;
  descriptionnote?: Maybe<String_Comparison_Exp>;
  dexterity?: Maybe<Int_Comparison_Exp>;
  dexterityprof?: Maybe<String_Comparison_Exp>;
  disciplinename1?: Maybe<String_Comparison_Exp>;
  disciplinename2?: Maybe<String_Comparison_Exp>;
  disciplinename3?: Maybe<String_Comparison_Exp>;
  disciplinename4?: Maybe<String_Comparison_Exp>;
  disciplinename5?: Maybe<String_Comparison_Exp>;
  disciplinename6?: Maybe<String_Comparison_Exp>;
  disciplinepoints1?: Maybe<Int_Comparison_Exp>;
  disciplinepoints2?: Maybe<Int_Comparison_Exp>;
  disciplinepoints3?: Maybe<Int_Comparison_Exp>;
  disciplinepoints4?: Maybe<Int_Comparison_Exp>;
  disciplinepoints5?: Maybe<Int_Comparison_Exp>;
  disciplinepoints6?: Maybe<Int_Comparison_Exp>;
  disciplineprof1?: Maybe<String_Comparison_Exp>;
  disciplineprof2?: Maybe<String_Comparison_Exp>;
  disciplineprof3?: Maybe<String_Comparison_Exp>;
  disciplineprof4?: Maybe<String_Comparison_Exp>;
  disciplineprof5?: Maybe<String_Comparison_Exp>;
  disciplineprof6?: Maybe<String_Comparison_Exp>;
  drive?: Maybe<Int_Comparison_Exp>;
  driveprof?: Maybe<String_Comparison_Exp>;
  empathy?: Maybe<Int_Comparison_Exp>;
  empathyprof?: Maybe<String_Comparison_Exp>;
  etiquette?: Maybe<Int_Comparison_Exp>;
  etiquetteprof?: Maybe<String_Comparison_Exp>;
  experience?: Maybe<Int_Comparison_Exp>;
  expression?: Maybe<Int_Comparison_Exp>;
  expressionprof?: Maybe<String_Comparison_Exp>;
  extraknowledgename?: Maybe<String_Comparison_Exp>;
  extraknowledgepoints?: Maybe<Int_Comparison_Exp>;
  extraknowledgeprof?: Maybe<String_Comparison_Exp>;
  extraskillname?: Maybe<String_Comparison_Exp>;
  extraskillpoints?: Maybe<Int_Comparison_Exp>;
  extraskillprof?: Maybe<String_Comparison_Exp>;
  extratalentname?: Maybe<String_Comparison_Exp>;
  extratalentpoints?: Maybe<Int_Comparison_Exp>;
  extratalentprof?: Maybe<String_Comparison_Exp>;
  finance?: Maybe<Int_Comparison_Exp>;
  financeprof?: Maybe<String_Comparison_Exp>;
  firearms?: Maybe<Int_Comparison_Exp>;
  firearmsprof?: Maybe<String_Comparison_Exp>;
  flawname1?: Maybe<String_Comparison_Exp>;
  flawname2?: Maybe<String_Comparison_Exp>;
  flawname3?: Maybe<String_Comparison_Exp>;
  flawname4?: Maybe<String_Comparison_Exp>;
  flawname5?: Maybe<String_Comparison_Exp>;
  flawpoints1?: Maybe<Int_Comparison_Exp>;
  flawpoints2?: Maybe<Int_Comparison_Exp>;
  flawpoints3?: Maybe<Int_Comparison_Exp>;
  flawpoints4?: Maybe<Int_Comparison_Exp>;
  flawpoints5?: Maybe<Int_Comparison_Exp>;
  flawprof1?: Maybe<String_Comparison_Exp>;
  flawprof2?: Maybe<String_Comparison_Exp>;
  flawprof3?: Maybe<String_Comparison_Exp>;
  flawprof4?: Maybe<String_Comparison_Exp>;
  flawprof5?: Maybe<String_Comparison_Exp>;
  generation?: Maybe<Int_Comparison_Exp>;
  generationdescription?: Maybe<String_Comparison_Exp>;
  health?: Maybe<Int_Comparison_Exp>;
  humanity?: Maybe<Int_Comparison_Exp>;
  intelligence?: Maybe<Int_Comparison_Exp>;
  intelligenceprof?: Maybe<String_Comparison_Exp>;
  intimidation?: Maybe<Int_Comparison_Exp>;
  intimidationprof?: Maybe<String_Comparison_Exp>;
  investigation?: Maybe<Int_Comparison_Exp>;
  investigationprof?: Maybe<String_Comparison_Exp>;
  larceny?: Maybe<Int_Comparison_Exp>;
  larcenyprof?: Maybe<String_Comparison_Exp>;
  law?: Maybe<Int_Comparison_Exp>;
  lawprof?: Maybe<String_Comparison_Exp>;
  leadership?: Maybe<Int_Comparison_Exp>;
  leadershipprof?: Maybe<String_Comparison_Exp>;
  manipulation?: Maybe<Int_Comparison_Exp>;
  manipulationprof?: Maybe<String_Comparison_Exp>;
  maxwillpower?: Maybe<Int_Comparison_Exp>;
  medicine?: Maybe<Int_Comparison_Exp>;
  medicineprof?: Maybe<String_Comparison_Exp>;
  melee?: Maybe<Int_Comparison_Exp>;
  meleeprof?: Maybe<String_Comparison_Exp>;
  meritname1?: Maybe<String_Comparison_Exp>;
  meritname2?: Maybe<String_Comparison_Exp>;
  meritname3?: Maybe<String_Comparison_Exp>;
  meritname4?: Maybe<String_Comparison_Exp>;
  meritname5?: Maybe<String_Comparison_Exp>;
  meritpoints1?: Maybe<Int_Comparison_Exp>;
  meritpoints2?: Maybe<Int_Comparison_Exp>;
  meritpoints3?: Maybe<Int_Comparison_Exp>;
  meritpoints4?: Maybe<Int_Comparison_Exp>;
  meritpoints5?: Maybe<Int_Comparison_Exp>;
  meritprof1?: Maybe<String_Comparison_Exp>;
  meritprof2?: Maybe<String_Comparison_Exp>;
  meritprof3?: Maybe<String_Comparison_Exp>;
  meritprof4?: Maybe<String_Comparison_Exp>;
  meritprof5?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  nature?: Maybe<String_Comparison_Exp>;
  naturedescription?: Maybe<String_Comparison_Exp>;
  natureregain?: Maybe<String_Comparison_Exp>;
  occult?: Maybe<Int_Comparison_Exp>;
  occultprof?: Maybe<String_Comparison_Exp>;
  othernotes?: Maybe<String_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
  perception?: Maybe<Int_Comparison_Exp>;
  perceptionprof?: Maybe<String_Comparison_Exp>;
  performance?: Maybe<Int_Comparison_Exp>;
  performanceprof?: Maybe<String_Comparison_Exp>;
  politics?: Maybe<Int_Comparison_Exp>;
  politicsprof?: Maybe<String_Comparison_Exp>;
  roleplayinghints?: Maybe<String_Comparison_Exp>;
  science?: Maybe<Int_Comparison_Exp>;
  scienceprof?: Maybe<String_Comparison_Exp>;
  sect?: Maybe<String_Comparison_Exp>;
  selfcontrol?: Maybe<Int_Comparison_Exp>;
  sheettype?: Maybe<String_Comparison_Exp>;
  sire?: Maybe<String_Comparison_Exp>;
  stamina?: Maybe<Int_Comparison_Exp>;
  staminaprof?: Maybe<String_Comparison_Exp>;
  stealth?: Maybe<Int_Comparison_Exp>;
  stealthprof?: Maybe<String_Comparison_Exp>;
  streetwise?: Maybe<Int_Comparison_Exp>;
  streetwiseprof?: Maybe<String_Comparison_Exp>;
  strength?: Maybe<Int_Comparison_Exp>;
  strengthprof?: Maybe<String_Comparison_Exp>;
  subterfuge?: Maybe<Int_Comparison_Exp>;
  subterfugeprof?: Maybe<String_Comparison_Exp>;
  survival?: Maybe<Int_Comparison_Exp>;
  survivalprof?: Maybe<String_Comparison_Exp>;
  technology?: Maybe<Int_Comparison_Exp>;
  technologyprof?: Maybe<String_Comparison_Exp>;
  useconviction?: Maybe<Bit_Comparison_Exp>;
  useinstinct?: Maybe<Bit_Comparison_Exp>;
  usepath?: Maybe<Bit_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
  weakness?: Maybe<String_Comparison_Exp>;
  willpower?: Maybe<Int_Comparison_Exp>;
  wits?: Maybe<Int_Comparison_Exp>;
  witsprof?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "characters" */
export enum Characters_Constraint {
  /** unique or primary key constraint */
  CharactersPkey = 'characters_pkey'
}

/** input type for incrementing numeric columns in table "characters" */
export type Characters_Inc_Input = {
  academics?: Maybe<Scalars['Int']>;
  alertness?: Maybe<Scalars['Int']>;
  animalken?: Maybe<Scalars['Int']>;
  appearance?: Maybe<Scalars['Int']>;
  athletics?: Maybe<Scalars['Int']>;
  awareness?: Maybe<Scalars['Int']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  charisma?: Maybe<Scalars['Int']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  computer?: Maybe<Scalars['Int']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  dexterity?: Maybe<Scalars['Int']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  drive?: Maybe<Scalars['Int']>;
  empathy?: Maybe<Scalars['Int']>;
  etiquette?: Maybe<Scalars['Int']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  finance?: Maybe<Scalars['Int']>;
  firearms?: Maybe<Scalars['Int']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  generation?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intimidation?: Maybe<Scalars['Int']>;
  investigation?: Maybe<Scalars['Int']>;
  larceny?: Maybe<Scalars['Int']>;
  law?: Maybe<Scalars['Int']>;
  leadership?: Maybe<Scalars['Int']>;
  manipulation?: Maybe<Scalars['Int']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  melee?: Maybe<Scalars['Int']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  occult?: Maybe<Scalars['Int']>;
  perception?: Maybe<Scalars['Int']>;
  performance?: Maybe<Scalars['Int']>;
  politics?: Maybe<Scalars['Int']>;
  science?: Maybe<Scalars['Int']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  stamina?: Maybe<Scalars['Int']>;
  stealth?: Maybe<Scalars['Int']>;
  streetwise?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  subterfuge?: Maybe<Scalars['Int']>;
  survival?: Maybe<Scalars['Int']>;
  technology?: Maybe<Scalars['Int']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "characters" */
export type Characters_Insert_Input = {
  academics?: Maybe<Scalars['Int']>;
  academicsprof?: Maybe<Scalars['String']>;
  agecategory?: Maybe<Scalars['String']>;
  alertness?: Maybe<Scalars['Int']>;
  alertnessprof?: Maybe<Scalars['String']>;
  animalken?: Maybe<Scalars['Int']>;
  animalkenprof?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['Int']>;
  appearanceprof?: Maybe<Scalars['String']>;
  athletics?: Maybe<Scalars['Int']>;
  athleticsprof?: Maybe<Scalars['String']>;
  awareness?: Maybe<Scalars['Int']>;
  awarenessprof?: Maybe<Scalars['String']>;
  backgroundname1?: Maybe<Scalars['String']>;
  backgroundname2?: Maybe<Scalars['String']>;
  backgroundname3?: Maybe<Scalars['String']>;
  backgroundname4?: Maybe<Scalars['String']>;
  backgroundname5?: Maybe<Scalars['String']>;
  backgroundname6?: Maybe<Scalars['String']>;
  backgroundnote?: Maybe<Scalars['String']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  backgroundprof1?: Maybe<Scalars['String']>;
  backgroundprof2?: Maybe<Scalars['String']>;
  backgroundprof3?: Maybe<Scalars['String']>;
  backgroundprof4?: Maybe<Scalars['String']>;
  backgroundprof5?: Maybe<Scalars['String']>;
  backgroundprof6?: Maybe<Scalars['String']>;
  bearing?: Maybe<Scalars['String']>;
  bearingmodifier?: Maybe<Scalars['String']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  brawlprof?: Maybe<Scalars['String']>;
  charisma?: Maybe<Scalars['Int']>;
  charismaprof?: Maybe<Scalars['String']>;
  chronicle?: Maybe<Scalars['String']>;
  chronicledescription?: Maybe<Scalars['String']>;
  clan?: Maybe<Scalars['String']>;
  combodisciplinename1?: Maybe<Scalars['String']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  combodisciplineprof1?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['Int']>;
  computerprof?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  demeanor?: Maybe<Scalars['String']>;
  demeanordescription?: Maybe<Scalars['String']>;
  descriptionnote?: Maybe<Scalars['String']>;
  dexterity?: Maybe<Scalars['Int']>;
  dexterityprof?: Maybe<Scalars['String']>;
  disciplinename1?: Maybe<Scalars['String']>;
  disciplinename2?: Maybe<Scalars['String']>;
  disciplinename3?: Maybe<Scalars['String']>;
  disciplinename4?: Maybe<Scalars['String']>;
  disciplinename5?: Maybe<Scalars['String']>;
  disciplinename6?: Maybe<Scalars['String']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  disciplineprof1?: Maybe<Scalars['String']>;
  disciplineprof2?: Maybe<Scalars['String']>;
  disciplineprof3?: Maybe<Scalars['String']>;
  disciplineprof4?: Maybe<Scalars['String']>;
  disciplineprof5?: Maybe<Scalars['String']>;
  disciplineprof6?: Maybe<Scalars['String']>;
  drive?: Maybe<Scalars['Int']>;
  driveprof?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Int']>;
  empathyprof?: Maybe<Scalars['String']>;
  etiquette?: Maybe<Scalars['Int']>;
  etiquetteprof?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  expressionprof?: Maybe<Scalars['String']>;
  extraknowledgename?: Maybe<Scalars['String']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraknowledgeprof?: Maybe<Scalars['String']>;
  extraskillname?: Maybe<Scalars['String']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extraskillprof?: Maybe<Scalars['String']>;
  extratalentname?: Maybe<Scalars['String']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  extratalentprof?: Maybe<Scalars['String']>;
  finance?: Maybe<Scalars['Int']>;
  financeprof?: Maybe<Scalars['String']>;
  firearms?: Maybe<Scalars['Int']>;
  firearmsprof?: Maybe<Scalars['String']>;
  flawname1?: Maybe<Scalars['String']>;
  flawname2?: Maybe<Scalars['String']>;
  flawname3?: Maybe<Scalars['String']>;
  flawname4?: Maybe<Scalars['String']>;
  flawname5?: Maybe<Scalars['String']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  flawprof1?: Maybe<Scalars['String']>;
  flawprof2?: Maybe<Scalars['String']>;
  flawprof3?: Maybe<Scalars['String']>;
  flawprof4?: Maybe<Scalars['String']>;
  flawprof5?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  generationdescription?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intelligenceprof?: Maybe<Scalars['String']>;
  intimidation?: Maybe<Scalars['Int']>;
  intimidationprof?: Maybe<Scalars['String']>;
  investigation?: Maybe<Scalars['Int']>;
  investigationprof?: Maybe<Scalars['String']>;
  larceny?: Maybe<Scalars['Int']>;
  larcenyprof?: Maybe<Scalars['String']>;
  law?: Maybe<Scalars['Int']>;
  lawprof?: Maybe<Scalars['String']>;
  leadership?: Maybe<Scalars['Int']>;
  leadershipprof?: Maybe<Scalars['String']>;
  manipulation?: Maybe<Scalars['Int']>;
  manipulationprof?: Maybe<Scalars['String']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  medicineprof?: Maybe<Scalars['String']>;
  melee?: Maybe<Scalars['Int']>;
  meleeprof?: Maybe<Scalars['String']>;
  meritname1?: Maybe<Scalars['String']>;
  meritname2?: Maybe<Scalars['String']>;
  meritname3?: Maybe<Scalars['String']>;
  meritname4?: Maybe<Scalars['String']>;
  meritname5?: Maybe<Scalars['String']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  meritprof1?: Maybe<Scalars['String']>;
  meritprof2?: Maybe<Scalars['String']>;
  meritprof3?: Maybe<Scalars['String']>;
  meritprof4?: Maybe<Scalars['String']>;
  meritprof5?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
  naturedescription?: Maybe<Scalars['String']>;
  natureregain?: Maybe<Scalars['String']>;
  occult?: Maybe<Scalars['Int']>;
  occultprof?: Maybe<Scalars['String']>;
  othernotes?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  perception?: Maybe<Scalars['Int']>;
  perceptionprof?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['Int']>;
  performanceprof?: Maybe<Scalars['String']>;
  politics?: Maybe<Scalars['Int']>;
  politicsprof?: Maybe<Scalars['String']>;
  roleplayinghints?: Maybe<Scalars['String']>;
  science?: Maybe<Scalars['Int']>;
  scienceprof?: Maybe<Scalars['String']>;
  sect?: Maybe<Scalars['String']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  sheettype?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Int']>;
  staminaprof?: Maybe<Scalars['String']>;
  stealth?: Maybe<Scalars['Int']>;
  stealthprof?: Maybe<Scalars['String']>;
  streetwise?: Maybe<Scalars['Int']>;
  streetwiseprof?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strengthprof?: Maybe<Scalars['String']>;
  subterfuge?: Maybe<Scalars['Int']>;
  subterfugeprof?: Maybe<Scalars['String']>;
  survival?: Maybe<Scalars['Int']>;
  survivalprof?: Maybe<Scalars['String']>;
  technology?: Maybe<Scalars['Int']>;
  technologyprof?: Maybe<Scalars['String']>;
  useconviction?: Maybe<Scalars['bit']>;
  useinstinct?: Maybe<Scalars['bit']>;
  usepath?: Maybe<Scalars['bit']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  weakness?: Maybe<Scalars['String']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
  witsprof?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Characters_Max_Fields = {
  __typename?: 'characters_max_fields';
  academics?: Maybe<Scalars['Int']>;
  academicsprof?: Maybe<Scalars['String']>;
  agecategory?: Maybe<Scalars['String']>;
  alertness?: Maybe<Scalars['Int']>;
  alertnessprof?: Maybe<Scalars['String']>;
  animalken?: Maybe<Scalars['Int']>;
  animalkenprof?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['Int']>;
  appearanceprof?: Maybe<Scalars['String']>;
  athletics?: Maybe<Scalars['Int']>;
  athleticsprof?: Maybe<Scalars['String']>;
  awareness?: Maybe<Scalars['Int']>;
  awarenessprof?: Maybe<Scalars['String']>;
  backgroundname1?: Maybe<Scalars['String']>;
  backgroundname2?: Maybe<Scalars['String']>;
  backgroundname3?: Maybe<Scalars['String']>;
  backgroundname4?: Maybe<Scalars['String']>;
  backgroundname5?: Maybe<Scalars['String']>;
  backgroundname6?: Maybe<Scalars['String']>;
  backgroundnote?: Maybe<Scalars['String']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  backgroundprof1?: Maybe<Scalars['String']>;
  backgroundprof2?: Maybe<Scalars['String']>;
  backgroundprof3?: Maybe<Scalars['String']>;
  backgroundprof4?: Maybe<Scalars['String']>;
  backgroundprof5?: Maybe<Scalars['String']>;
  backgroundprof6?: Maybe<Scalars['String']>;
  bearing?: Maybe<Scalars['String']>;
  bearingmodifier?: Maybe<Scalars['String']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  brawlprof?: Maybe<Scalars['String']>;
  charisma?: Maybe<Scalars['Int']>;
  charismaprof?: Maybe<Scalars['String']>;
  chronicle?: Maybe<Scalars['String']>;
  chronicledescription?: Maybe<Scalars['String']>;
  clan?: Maybe<Scalars['String']>;
  combodisciplinename1?: Maybe<Scalars['String']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  combodisciplineprof1?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['Int']>;
  computerprof?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  demeanor?: Maybe<Scalars['String']>;
  demeanordescription?: Maybe<Scalars['String']>;
  descriptionnote?: Maybe<Scalars['String']>;
  dexterity?: Maybe<Scalars['Int']>;
  dexterityprof?: Maybe<Scalars['String']>;
  disciplinename1?: Maybe<Scalars['String']>;
  disciplinename2?: Maybe<Scalars['String']>;
  disciplinename3?: Maybe<Scalars['String']>;
  disciplinename4?: Maybe<Scalars['String']>;
  disciplinename5?: Maybe<Scalars['String']>;
  disciplinename6?: Maybe<Scalars['String']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  disciplineprof1?: Maybe<Scalars['String']>;
  disciplineprof2?: Maybe<Scalars['String']>;
  disciplineprof3?: Maybe<Scalars['String']>;
  disciplineprof4?: Maybe<Scalars['String']>;
  disciplineprof5?: Maybe<Scalars['String']>;
  disciplineprof6?: Maybe<Scalars['String']>;
  drive?: Maybe<Scalars['Int']>;
  driveprof?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Int']>;
  empathyprof?: Maybe<Scalars['String']>;
  etiquette?: Maybe<Scalars['Int']>;
  etiquetteprof?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  expressionprof?: Maybe<Scalars['String']>;
  extraknowledgename?: Maybe<Scalars['String']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraknowledgeprof?: Maybe<Scalars['String']>;
  extraskillname?: Maybe<Scalars['String']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extraskillprof?: Maybe<Scalars['String']>;
  extratalentname?: Maybe<Scalars['String']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  extratalentprof?: Maybe<Scalars['String']>;
  finance?: Maybe<Scalars['Int']>;
  financeprof?: Maybe<Scalars['String']>;
  firearms?: Maybe<Scalars['Int']>;
  firearmsprof?: Maybe<Scalars['String']>;
  flawname1?: Maybe<Scalars['String']>;
  flawname2?: Maybe<Scalars['String']>;
  flawname3?: Maybe<Scalars['String']>;
  flawname4?: Maybe<Scalars['String']>;
  flawname5?: Maybe<Scalars['String']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  flawprof1?: Maybe<Scalars['String']>;
  flawprof2?: Maybe<Scalars['String']>;
  flawprof3?: Maybe<Scalars['String']>;
  flawprof4?: Maybe<Scalars['String']>;
  flawprof5?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  generationdescription?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intelligenceprof?: Maybe<Scalars['String']>;
  intimidation?: Maybe<Scalars['Int']>;
  intimidationprof?: Maybe<Scalars['String']>;
  investigation?: Maybe<Scalars['Int']>;
  investigationprof?: Maybe<Scalars['String']>;
  larceny?: Maybe<Scalars['Int']>;
  larcenyprof?: Maybe<Scalars['String']>;
  law?: Maybe<Scalars['Int']>;
  lawprof?: Maybe<Scalars['String']>;
  leadership?: Maybe<Scalars['Int']>;
  leadershipprof?: Maybe<Scalars['String']>;
  manipulation?: Maybe<Scalars['Int']>;
  manipulationprof?: Maybe<Scalars['String']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  medicineprof?: Maybe<Scalars['String']>;
  melee?: Maybe<Scalars['Int']>;
  meleeprof?: Maybe<Scalars['String']>;
  meritname1?: Maybe<Scalars['String']>;
  meritname2?: Maybe<Scalars['String']>;
  meritname3?: Maybe<Scalars['String']>;
  meritname4?: Maybe<Scalars['String']>;
  meritname5?: Maybe<Scalars['String']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  meritprof1?: Maybe<Scalars['String']>;
  meritprof2?: Maybe<Scalars['String']>;
  meritprof3?: Maybe<Scalars['String']>;
  meritprof4?: Maybe<Scalars['String']>;
  meritprof5?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
  naturedescription?: Maybe<Scalars['String']>;
  natureregain?: Maybe<Scalars['String']>;
  occult?: Maybe<Scalars['Int']>;
  occultprof?: Maybe<Scalars['String']>;
  othernotes?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  perception?: Maybe<Scalars['Int']>;
  perceptionprof?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['Int']>;
  performanceprof?: Maybe<Scalars['String']>;
  politics?: Maybe<Scalars['Int']>;
  politicsprof?: Maybe<Scalars['String']>;
  roleplayinghints?: Maybe<Scalars['String']>;
  science?: Maybe<Scalars['Int']>;
  scienceprof?: Maybe<Scalars['String']>;
  sect?: Maybe<Scalars['String']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  sheettype?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Int']>;
  staminaprof?: Maybe<Scalars['String']>;
  stealth?: Maybe<Scalars['Int']>;
  stealthprof?: Maybe<Scalars['String']>;
  streetwise?: Maybe<Scalars['Int']>;
  streetwiseprof?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strengthprof?: Maybe<Scalars['String']>;
  subterfuge?: Maybe<Scalars['Int']>;
  subterfugeprof?: Maybe<Scalars['String']>;
  survival?: Maybe<Scalars['Int']>;
  survivalprof?: Maybe<Scalars['String']>;
  technology?: Maybe<Scalars['Int']>;
  technologyprof?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  weakness?: Maybe<Scalars['String']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
  witsprof?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Characters_Min_Fields = {
  __typename?: 'characters_min_fields';
  academics?: Maybe<Scalars['Int']>;
  academicsprof?: Maybe<Scalars['String']>;
  agecategory?: Maybe<Scalars['String']>;
  alertness?: Maybe<Scalars['Int']>;
  alertnessprof?: Maybe<Scalars['String']>;
  animalken?: Maybe<Scalars['Int']>;
  animalkenprof?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['Int']>;
  appearanceprof?: Maybe<Scalars['String']>;
  athletics?: Maybe<Scalars['Int']>;
  athleticsprof?: Maybe<Scalars['String']>;
  awareness?: Maybe<Scalars['Int']>;
  awarenessprof?: Maybe<Scalars['String']>;
  backgroundname1?: Maybe<Scalars['String']>;
  backgroundname2?: Maybe<Scalars['String']>;
  backgroundname3?: Maybe<Scalars['String']>;
  backgroundname4?: Maybe<Scalars['String']>;
  backgroundname5?: Maybe<Scalars['String']>;
  backgroundname6?: Maybe<Scalars['String']>;
  backgroundnote?: Maybe<Scalars['String']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  backgroundprof1?: Maybe<Scalars['String']>;
  backgroundprof2?: Maybe<Scalars['String']>;
  backgroundprof3?: Maybe<Scalars['String']>;
  backgroundprof4?: Maybe<Scalars['String']>;
  backgroundprof5?: Maybe<Scalars['String']>;
  backgroundprof6?: Maybe<Scalars['String']>;
  bearing?: Maybe<Scalars['String']>;
  bearingmodifier?: Maybe<Scalars['String']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  brawlprof?: Maybe<Scalars['String']>;
  charisma?: Maybe<Scalars['Int']>;
  charismaprof?: Maybe<Scalars['String']>;
  chronicle?: Maybe<Scalars['String']>;
  chronicledescription?: Maybe<Scalars['String']>;
  clan?: Maybe<Scalars['String']>;
  combodisciplinename1?: Maybe<Scalars['String']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  combodisciplineprof1?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['Int']>;
  computerprof?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  demeanor?: Maybe<Scalars['String']>;
  demeanordescription?: Maybe<Scalars['String']>;
  descriptionnote?: Maybe<Scalars['String']>;
  dexterity?: Maybe<Scalars['Int']>;
  dexterityprof?: Maybe<Scalars['String']>;
  disciplinename1?: Maybe<Scalars['String']>;
  disciplinename2?: Maybe<Scalars['String']>;
  disciplinename3?: Maybe<Scalars['String']>;
  disciplinename4?: Maybe<Scalars['String']>;
  disciplinename5?: Maybe<Scalars['String']>;
  disciplinename6?: Maybe<Scalars['String']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  disciplineprof1?: Maybe<Scalars['String']>;
  disciplineprof2?: Maybe<Scalars['String']>;
  disciplineprof3?: Maybe<Scalars['String']>;
  disciplineprof4?: Maybe<Scalars['String']>;
  disciplineprof5?: Maybe<Scalars['String']>;
  disciplineprof6?: Maybe<Scalars['String']>;
  drive?: Maybe<Scalars['Int']>;
  driveprof?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Int']>;
  empathyprof?: Maybe<Scalars['String']>;
  etiquette?: Maybe<Scalars['Int']>;
  etiquetteprof?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  expressionprof?: Maybe<Scalars['String']>;
  extraknowledgename?: Maybe<Scalars['String']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraknowledgeprof?: Maybe<Scalars['String']>;
  extraskillname?: Maybe<Scalars['String']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extraskillprof?: Maybe<Scalars['String']>;
  extratalentname?: Maybe<Scalars['String']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  extratalentprof?: Maybe<Scalars['String']>;
  finance?: Maybe<Scalars['Int']>;
  financeprof?: Maybe<Scalars['String']>;
  firearms?: Maybe<Scalars['Int']>;
  firearmsprof?: Maybe<Scalars['String']>;
  flawname1?: Maybe<Scalars['String']>;
  flawname2?: Maybe<Scalars['String']>;
  flawname3?: Maybe<Scalars['String']>;
  flawname4?: Maybe<Scalars['String']>;
  flawname5?: Maybe<Scalars['String']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  flawprof1?: Maybe<Scalars['String']>;
  flawprof2?: Maybe<Scalars['String']>;
  flawprof3?: Maybe<Scalars['String']>;
  flawprof4?: Maybe<Scalars['String']>;
  flawprof5?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  generationdescription?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intelligenceprof?: Maybe<Scalars['String']>;
  intimidation?: Maybe<Scalars['Int']>;
  intimidationprof?: Maybe<Scalars['String']>;
  investigation?: Maybe<Scalars['Int']>;
  investigationprof?: Maybe<Scalars['String']>;
  larceny?: Maybe<Scalars['Int']>;
  larcenyprof?: Maybe<Scalars['String']>;
  law?: Maybe<Scalars['Int']>;
  lawprof?: Maybe<Scalars['String']>;
  leadership?: Maybe<Scalars['Int']>;
  leadershipprof?: Maybe<Scalars['String']>;
  manipulation?: Maybe<Scalars['Int']>;
  manipulationprof?: Maybe<Scalars['String']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  medicineprof?: Maybe<Scalars['String']>;
  melee?: Maybe<Scalars['Int']>;
  meleeprof?: Maybe<Scalars['String']>;
  meritname1?: Maybe<Scalars['String']>;
  meritname2?: Maybe<Scalars['String']>;
  meritname3?: Maybe<Scalars['String']>;
  meritname4?: Maybe<Scalars['String']>;
  meritname5?: Maybe<Scalars['String']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  meritprof1?: Maybe<Scalars['String']>;
  meritprof2?: Maybe<Scalars['String']>;
  meritprof3?: Maybe<Scalars['String']>;
  meritprof4?: Maybe<Scalars['String']>;
  meritprof5?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
  naturedescription?: Maybe<Scalars['String']>;
  natureregain?: Maybe<Scalars['String']>;
  occult?: Maybe<Scalars['Int']>;
  occultprof?: Maybe<Scalars['String']>;
  othernotes?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  perception?: Maybe<Scalars['Int']>;
  perceptionprof?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['Int']>;
  performanceprof?: Maybe<Scalars['String']>;
  politics?: Maybe<Scalars['Int']>;
  politicsprof?: Maybe<Scalars['String']>;
  roleplayinghints?: Maybe<Scalars['String']>;
  science?: Maybe<Scalars['Int']>;
  scienceprof?: Maybe<Scalars['String']>;
  sect?: Maybe<Scalars['String']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  sheettype?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Int']>;
  staminaprof?: Maybe<Scalars['String']>;
  stealth?: Maybe<Scalars['Int']>;
  stealthprof?: Maybe<Scalars['String']>;
  streetwise?: Maybe<Scalars['Int']>;
  streetwiseprof?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strengthprof?: Maybe<Scalars['String']>;
  subterfuge?: Maybe<Scalars['Int']>;
  subterfugeprof?: Maybe<Scalars['String']>;
  survival?: Maybe<Scalars['Int']>;
  survivalprof?: Maybe<Scalars['String']>;
  technology?: Maybe<Scalars['Int']>;
  technologyprof?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  weakness?: Maybe<Scalars['String']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
  witsprof?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "characters" */
export type Characters_Mutation_Response = {
  __typename?: 'characters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Characters>;
};

/** on conflict condition type for table "characters" */
export type Characters_On_Conflict = {
  constraint: Characters_Constraint;
  update_columns?: Array<Characters_Update_Column>;
  where?: Maybe<Characters_Bool_Exp>;
};

/** Ordering options when selecting data from "characters". */
export type Characters_Order_By = {
  academics?: Maybe<Order_By>;
  academicsprof?: Maybe<Order_By>;
  agecategory?: Maybe<Order_By>;
  alertness?: Maybe<Order_By>;
  alertnessprof?: Maybe<Order_By>;
  animalken?: Maybe<Order_By>;
  animalkenprof?: Maybe<Order_By>;
  appearance?: Maybe<Order_By>;
  appearanceprof?: Maybe<Order_By>;
  athletics?: Maybe<Order_By>;
  athleticsprof?: Maybe<Order_By>;
  awareness?: Maybe<Order_By>;
  awarenessprof?: Maybe<Order_By>;
  backgroundname1?: Maybe<Order_By>;
  backgroundname2?: Maybe<Order_By>;
  backgroundname3?: Maybe<Order_By>;
  backgroundname4?: Maybe<Order_By>;
  backgroundname5?: Maybe<Order_By>;
  backgroundname6?: Maybe<Order_By>;
  backgroundnote?: Maybe<Order_By>;
  backgroundpoints1?: Maybe<Order_By>;
  backgroundpoints2?: Maybe<Order_By>;
  backgroundpoints3?: Maybe<Order_By>;
  backgroundpoints4?: Maybe<Order_By>;
  backgroundpoints5?: Maybe<Order_By>;
  backgroundpoints6?: Maybe<Order_By>;
  backgroundprof1?: Maybe<Order_By>;
  backgroundprof2?: Maybe<Order_By>;
  backgroundprof3?: Maybe<Order_By>;
  backgroundprof4?: Maybe<Order_By>;
  backgroundprof5?: Maybe<Order_By>;
  backgroundprof6?: Maybe<Order_By>;
  bearing?: Maybe<Order_By>;
  bearingmodifier?: Maybe<Order_By>;
  bloodperturn?: Maybe<Order_By>;
  bloodpool?: Maybe<Order_By>;
  brawl?: Maybe<Order_By>;
  brawlprof?: Maybe<Order_By>;
  charisma?: Maybe<Order_By>;
  charismaprof?: Maybe<Order_By>;
  chronicle?: Maybe<Order_By>;
  chronicledescription?: Maybe<Order_By>;
  clan?: Maybe<Order_By>;
  combodisciplinename1?: Maybe<Order_By>;
  combodisciplinepoints1?: Maybe<Order_By>;
  combodisciplineprof1?: Maybe<Order_By>;
  computer?: Maybe<Order_By>;
  computerprof?: Maybe<Order_By>;
  concept?: Maybe<Order_By>;
  conscience?: Maybe<Order_By>;
  courage?: Maybe<Order_By>;
  crafts?: Maybe<Order_By>;
  demeanor?: Maybe<Order_By>;
  demeanordescription?: Maybe<Order_By>;
  descriptionnote?: Maybe<Order_By>;
  dexterity?: Maybe<Order_By>;
  dexterityprof?: Maybe<Order_By>;
  disciplinename1?: Maybe<Order_By>;
  disciplinename2?: Maybe<Order_By>;
  disciplinename3?: Maybe<Order_By>;
  disciplinename4?: Maybe<Order_By>;
  disciplinename5?: Maybe<Order_By>;
  disciplinename6?: Maybe<Order_By>;
  disciplinepoints1?: Maybe<Order_By>;
  disciplinepoints2?: Maybe<Order_By>;
  disciplinepoints3?: Maybe<Order_By>;
  disciplinepoints4?: Maybe<Order_By>;
  disciplinepoints5?: Maybe<Order_By>;
  disciplinepoints6?: Maybe<Order_By>;
  disciplineprof1?: Maybe<Order_By>;
  disciplineprof2?: Maybe<Order_By>;
  disciplineprof3?: Maybe<Order_By>;
  disciplineprof4?: Maybe<Order_By>;
  disciplineprof5?: Maybe<Order_By>;
  disciplineprof6?: Maybe<Order_By>;
  drive?: Maybe<Order_By>;
  driveprof?: Maybe<Order_By>;
  empathy?: Maybe<Order_By>;
  empathyprof?: Maybe<Order_By>;
  etiquette?: Maybe<Order_By>;
  etiquetteprof?: Maybe<Order_By>;
  experience?: Maybe<Order_By>;
  expression?: Maybe<Order_By>;
  expressionprof?: Maybe<Order_By>;
  extraknowledgename?: Maybe<Order_By>;
  extraknowledgepoints?: Maybe<Order_By>;
  extraknowledgeprof?: Maybe<Order_By>;
  extraskillname?: Maybe<Order_By>;
  extraskillpoints?: Maybe<Order_By>;
  extraskillprof?: Maybe<Order_By>;
  extratalentname?: Maybe<Order_By>;
  extratalentpoints?: Maybe<Order_By>;
  extratalentprof?: Maybe<Order_By>;
  finance?: Maybe<Order_By>;
  financeprof?: Maybe<Order_By>;
  firearms?: Maybe<Order_By>;
  firearmsprof?: Maybe<Order_By>;
  flawname1?: Maybe<Order_By>;
  flawname2?: Maybe<Order_By>;
  flawname3?: Maybe<Order_By>;
  flawname4?: Maybe<Order_By>;
  flawname5?: Maybe<Order_By>;
  flawpoints1?: Maybe<Order_By>;
  flawpoints2?: Maybe<Order_By>;
  flawpoints3?: Maybe<Order_By>;
  flawpoints4?: Maybe<Order_By>;
  flawpoints5?: Maybe<Order_By>;
  flawprof1?: Maybe<Order_By>;
  flawprof2?: Maybe<Order_By>;
  flawprof3?: Maybe<Order_By>;
  flawprof4?: Maybe<Order_By>;
  flawprof5?: Maybe<Order_By>;
  generation?: Maybe<Order_By>;
  generationdescription?: Maybe<Order_By>;
  health?: Maybe<Order_By>;
  humanity?: Maybe<Order_By>;
  intelligence?: Maybe<Order_By>;
  intelligenceprof?: Maybe<Order_By>;
  intimidation?: Maybe<Order_By>;
  intimidationprof?: Maybe<Order_By>;
  investigation?: Maybe<Order_By>;
  investigationprof?: Maybe<Order_By>;
  larceny?: Maybe<Order_By>;
  larcenyprof?: Maybe<Order_By>;
  law?: Maybe<Order_By>;
  lawprof?: Maybe<Order_By>;
  leadership?: Maybe<Order_By>;
  leadershipprof?: Maybe<Order_By>;
  manipulation?: Maybe<Order_By>;
  manipulationprof?: Maybe<Order_By>;
  maxwillpower?: Maybe<Order_By>;
  medicine?: Maybe<Order_By>;
  medicineprof?: Maybe<Order_By>;
  melee?: Maybe<Order_By>;
  meleeprof?: Maybe<Order_By>;
  meritname1?: Maybe<Order_By>;
  meritname2?: Maybe<Order_By>;
  meritname3?: Maybe<Order_By>;
  meritname4?: Maybe<Order_By>;
  meritname5?: Maybe<Order_By>;
  meritpoints1?: Maybe<Order_By>;
  meritpoints2?: Maybe<Order_By>;
  meritpoints3?: Maybe<Order_By>;
  meritpoints4?: Maybe<Order_By>;
  meritpoints5?: Maybe<Order_By>;
  meritprof1?: Maybe<Order_By>;
  meritprof2?: Maybe<Order_By>;
  meritprof3?: Maybe<Order_By>;
  meritprof4?: Maybe<Order_By>;
  meritprof5?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  nature?: Maybe<Order_By>;
  naturedescription?: Maybe<Order_By>;
  natureregain?: Maybe<Order_By>;
  occult?: Maybe<Order_By>;
  occultprof?: Maybe<Order_By>;
  othernotes?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  perception?: Maybe<Order_By>;
  perceptionprof?: Maybe<Order_By>;
  performance?: Maybe<Order_By>;
  performanceprof?: Maybe<Order_By>;
  politics?: Maybe<Order_By>;
  politicsprof?: Maybe<Order_By>;
  roleplayinghints?: Maybe<Order_By>;
  science?: Maybe<Order_By>;
  scienceprof?: Maybe<Order_By>;
  sect?: Maybe<Order_By>;
  selfcontrol?: Maybe<Order_By>;
  sheettype?: Maybe<Order_By>;
  sire?: Maybe<Order_By>;
  stamina?: Maybe<Order_By>;
  staminaprof?: Maybe<Order_By>;
  stealth?: Maybe<Order_By>;
  stealthprof?: Maybe<Order_By>;
  streetwise?: Maybe<Order_By>;
  streetwiseprof?: Maybe<Order_By>;
  strength?: Maybe<Order_By>;
  strengthprof?: Maybe<Order_By>;
  subterfuge?: Maybe<Order_By>;
  subterfugeprof?: Maybe<Order_By>;
  survival?: Maybe<Order_By>;
  survivalprof?: Maybe<Order_By>;
  technology?: Maybe<Order_By>;
  technologyprof?: Maybe<Order_By>;
  useconviction?: Maybe<Order_By>;
  useinstinct?: Maybe<Order_By>;
  usepath?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
  weakness?: Maybe<Order_By>;
  willpower?: Maybe<Order_By>;
  wits?: Maybe<Order_By>;
  witsprof?: Maybe<Order_By>;
};

/** primary key columns input for table: characters */
export type Characters_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "characters" */
export enum Characters_Select_Column {
  /** column name */
  Academics = 'academics',
  /** column name */
  Academicsprof = 'academicsprof',
  /** column name */
  Agecategory = 'agecategory',
  /** column name */
  Alertness = 'alertness',
  /** column name */
  Alertnessprof = 'alertnessprof',
  /** column name */
  Animalken = 'animalken',
  /** column name */
  Animalkenprof = 'animalkenprof',
  /** column name */
  Appearance = 'appearance',
  /** column name */
  Appearanceprof = 'appearanceprof',
  /** column name */
  Athletics = 'athletics',
  /** column name */
  Athleticsprof = 'athleticsprof',
  /** column name */
  Awareness = 'awareness',
  /** column name */
  Awarenessprof = 'awarenessprof',
  /** column name */
  Backgroundname1 = 'backgroundname1',
  /** column name */
  Backgroundname2 = 'backgroundname2',
  /** column name */
  Backgroundname3 = 'backgroundname3',
  /** column name */
  Backgroundname4 = 'backgroundname4',
  /** column name */
  Backgroundname5 = 'backgroundname5',
  /** column name */
  Backgroundname6 = 'backgroundname6',
  /** column name */
  Backgroundnote = 'backgroundnote',
  /** column name */
  Backgroundpoints1 = 'backgroundpoints1',
  /** column name */
  Backgroundpoints2 = 'backgroundpoints2',
  /** column name */
  Backgroundpoints3 = 'backgroundpoints3',
  /** column name */
  Backgroundpoints4 = 'backgroundpoints4',
  /** column name */
  Backgroundpoints5 = 'backgroundpoints5',
  /** column name */
  Backgroundpoints6 = 'backgroundpoints6',
  /** column name */
  Backgroundprof1 = 'backgroundprof1',
  /** column name */
  Backgroundprof2 = 'backgroundprof2',
  /** column name */
  Backgroundprof3 = 'backgroundprof3',
  /** column name */
  Backgroundprof4 = 'backgroundprof4',
  /** column name */
  Backgroundprof5 = 'backgroundprof5',
  /** column name */
  Backgroundprof6 = 'backgroundprof6',
  /** column name */
  Bearing = 'bearing',
  /** column name */
  Bearingmodifier = 'bearingmodifier',
  /** column name */
  Bloodperturn = 'bloodperturn',
  /** column name */
  Bloodpool = 'bloodpool',
  /** column name */
  Brawl = 'brawl',
  /** column name */
  Brawlprof = 'brawlprof',
  /** column name */
  Charisma = 'charisma',
  /** column name */
  Charismaprof = 'charismaprof',
  /** column name */
  Chronicle = 'chronicle',
  /** column name */
  Chronicledescription = 'chronicledescription',
  /** column name */
  Clan = 'clan',
  /** column name */
  Combodisciplinename1 = 'combodisciplinename1',
  /** column name */
  Combodisciplinepoints1 = 'combodisciplinepoints1',
  /** column name */
  Combodisciplineprof1 = 'combodisciplineprof1',
  /** column name */
  Computer = 'computer',
  /** column name */
  Computerprof = 'computerprof',
  /** column name */
  Concept = 'concept',
  /** column name */
  Conscience = 'conscience',
  /** column name */
  Courage = 'courage',
  /** column name */
  Crafts = 'crafts',
  /** column name */
  Demeanor = 'demeanor',
  /** column name */
  Demeanordescription = 'demeanordescription',
  /** column name */
  Descriptionnote = 'descriptionnote',
  /** column name */
  Dexterity = 'dexterity',
  /** column name */
  Dexterityprof = 'dexterityprof',
  /** column name */
  Disciplinename1 = 'disciplinename1',
  /** column name */
  Disciplinename2 = 'disciplinename2',
  /** column name */
  Disciplinename3 = 'disciplinename3',
  /** column name */
  Disciplinename4 = 'disciplinename4',
  /** column name */
  Disciplinename5 = 'disciplinename5',
  /** column name */
  Disciplinename6 = 'disciplinename6',
  /** column name */
  Disciplinepoints1 = 'disciplinepoints1',
  /** column name */
  Disciplinepoints2 = 'disciplinepoints2',
  /** column name */
  Disciplinepoints3 = 'disciplinepoints3',
  /** column name */
  Disciplinepoints4 = 'disciplinepoints4',
  /** column name */
  Disciplinepoints5 = 'disciplinepoints5',
  /** column name */
  Disciplinepoints6 = 'disciplinepoints6',
  /** column name */
  Disciplineprof1 = 'disciplineprof1',
  /** column name */
  Disciplineprof2 = 'disciplineprof2',
  /** column name */
  Disciplineprof3 = 'disciplineprof3',
  /** column name */
  Disciplineprof4 = 'disciplineprof4',
  /** column name */
  Disciplineprof5 = 'disciplineprof5',
  /** column name */
  Disciplineprof6 = 'disciplineprof6',
  /** column name */
  Drive = 'drive',
  /** column name */
  Driveprof = 'driveprof',
  /** column name */
  Empathy = 'empathy',
  /** column name */
  Empathyprof = 'empathyprof',
  /** column name */
  Etiquette = 'etiquette',
  /** column name */
  Etiquetteprof = 'etiquetteprof',
  /** column name */
  Experience = 'experience',
  /** column name */
  Expression = 'expression',
  /** column name */
  Expressionprof = 'expressionprof',
  /** column name */
  Extraknowledgename = 'extraknowledgename',
  /** column name */
  Extraknowledgepoints = 'extraknowledgepoints',
  /** column name */
  Extraknowledgeprof = 'extraknowledgeprof',
  /** column name */
  Extraskillname = 'extraskillname',
  /** column name */
  Extraskillpoints = 'extraskillpoints',
  /** column name */
  Extraskillprof = 'extraskillprof',
  /** column name */
  Extratalentname = 'extratalentname',
  /** column name */
  Extratalentpoints = 'extratalentpoints',
  /** column name */
  Extratalentprof = 'extratalentprof',
  /** column name */
  Finance = 'finance',
  /** column name */
  Financeprof = 'financeprof',
  /** column name */
  Firearms = 'firearms',
  /** column name */
  Firearmsprof = 'firearmsprof',
  /** column name */
  Flawname1 = 'flawname1',
  /** column name */
  Flawname2 = 'flawname2',
  /** column name */
  Flawname3 = 'flawname3',
  /** column name */
  Flawname4 = 'flawname4',
  /** column name */
  Flawname5 = 'flawname5',
  /** column name */
  Flawpoints1 = 'flawpoints1',
  /** column name */
  Flawpoints2 = 'flawpoints2',
  /** column name */
  Flawpoints3 = 'flawpoints3',
  /** column name */
  Flawpoints4 = 'flawpoints4',
  /** column name */
  Flawpoints5 = 'flawpoints5',
  /** column name */
  Flawprof1 = 'flawprof1',
  /** column name */
  Flawprof2 = 'flawprof2',
  /** column name */
  Flawprof3 = 'flawprof3',
  /** column name */
  Flawprof4 = 'flawprof4',
  /** column name */
  Flawprof5 = 'flawprof5',
  /** column name */
  Generation = 'generation',
  /** column name */
  Generationdescription = 'generationdescription',
  /** column name */
  Health = 'health',
  /** column name */
  Humanity = 'humanity',
  /** column name */
  Intelligence = 'intelligence',
  /** column name */
  Intelligenceprof = 'intelligenceprof',
  /** column name */
  Intimidation = 'intimidation',
  /** column name */
  Intimidationprof = 'intimidationprof',
  /** column name */
  Investigation = 'investigation',
  /** column name */
  Investigationprof = 'investigationprof',
  /** column name */
  Larceny = 'larceny',
  /** column name */
  Larcenyprof = 'larcenyprof',
  /** column name */
  Law = 'law',
  /** column name */
  Lawprof = 'lawprof',
  /** column name */
  Leadership = 'leadership',
  /** column name */
  Leadershipprof = 'leadershipprof',
  /** column name */
  Manipulation = 'manipulation',
  /** column name */
  Manipulationprof = 'manipulationprof',
  /** column name */
  Maxwillpower = 'maxwillpower',
  /** column name */
  Medicine = 'medicine',
  /** column name */
  Medicineprof = 'medicineprof',
  /** column name */
  Melee = 'melee',
  /** column name */
  Meleeprof = 'meleeprof',
  /** column name */
  Meritname1 = 'meritname1',
  /** column name */
  Meritname2 = 'meritname2',
  /** column name */
  Meritname3 = 'meritname3',
  /** column name */
  Meritname4 = 'meritname4',
  /** column name */
  Meritname5 = 'meritname5',
  /** column name */
  Meritpoints1 = 'meritpoints1',
  /** column name */
  Meritpoints2 = 'meritpoints2',
  /** column name */
  Meritpoints3 = 'meritpoints3',
  /** column name */
  Meritpoints4 = 'meritpoints4',
  /** column name */
  Meritpoints5 = 'meritpoints5',
  /** column name */
  Meritprof1 = 'meritprof1',
  /** column name */
  Meritprof2 = 'meritprof2',
  /** column name */
  Meritprof3 = 'meritprof3',
  /** column name */
  Meritprof4 = 'meritprof4',
  /** column name */
  Meritprof5 = 'meritprof5',
  /** column name */
  Name = 'name',
  /** column name */
  Nature = 'nature',
  /** column name */
  Naturedescription = 'naturedescription',
  /** column name */
  Natureregain = 'natureregain',
  /** column name */
  Occult = 'occult',
  /** column name */
  Occultprof = 'occultprof',
  /** column name */
  Othernotes = 'othernotes',
  /** column name */
  Path = 'path',
  /** column name */
  Perception = 'perception',
  /** column name */
  Perceptionprof = 'perceptionprof',
  /** column name */
  Performance = 'performance',
  /** column name */
  Performanceprof = 'performanceprof',
  /** column name */
  Politics = 'politics',
  /** column name */
  Politicsprof = 'politicsprof',
  /** column name */
  Roleplayinghints = 'roleplayinghints',
  /** column name */
  Science = 'science',
  /** column name */
  Scienceprof = 'scienceprof',
  /** column name */
  Sect = 'sect',
  /** column name */
  Selfcontrol = 'selfcontrol',
  /** column name */
  Sheettype = 'sheettype',
  /** column name */
  Sire = 'sire',
  /** column name */
  Stamina = 'stamina',
  /** column name */
  Staminaprof = 'staminaprof',
  /** column name */
  Stealth = 'stealth',
  /** column name */
  Stealthprof = 'stealthprof',
  /** column name */
  Streetwise = 'streetwise',
  /** column name */
  Streetwiseprof = 'streetwiseprof',
  /** column name */
  Strength = 'strength',
  /** column name */
  Strengthprof = 'strengthprof',
  /** column name */
  Subterfuge = 'subterfuge',
  /** column name */
  Subterfugeprof = 'subterfugeprof',
  /** column name */
  Survival = 'survival',
  /** column name */
  Survivalprof = 'survivalprof',
  /** column name */
  Technology = 'technology',
  /** column name */
  Technologyprof = 'technologyprof',
  /** column name */
  Useconviction = 'useconviction',
  /** column name */
  Useinstinct = 'useinstinct',
  /** column name */
  Usepath = 'usepath',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Weakness = 'weakness',
  /** column name */
  Willpower = 'willpower',
  /** column name */
  Wits = 'wits',
  /** column name */
  Witsprof = 'witsprof'
}

/** input type for updating data in table "characters" */
export type Characters_Set_Input = {
  academics?: Maybe<Scalars['Int']>;
  academicsprof?: Maybe<Scalars['String']>;
  agecategory?: Maybe<Scalars['String']>;
  alertness?: Maybe<Scalars['Int']>;
  alertnessprof?: Maybe<Scalars['String']>;
  animalken?: Maybe<Scalars['Int']>;
  animalkenprof?: Maybe<Scalars['String']>;
  appearance?: Maybe<Scalars['Int']>;
  appearanceprof?: Maybe<Scalars['String']>;
  athletics?: Maybe<Scalars['Int']>;
  athleticsprof?: Maybe<Scalars['String']>;
  awareness?: Maybe<Scalars['Int']>;
  awarenessprof?: Maybe<Scalars['String']>;
  backgroundname1?: Maybe<Scalars['String']>;
  backgroundname2?: Maybe<Scalars['String']>;
  backgroundname3?: Maybe<Scalars['String']>;
  backgroundname4?: Maybe<Scalars['String']>;
  backgroundname5?: Maybe<Scalars['String']>;
  backgroundname6?: Maybe<Scalars['String']>;
  backgroundnote?: Maybe<Scalars['String']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  backgroundprof1?: Maybe<Scalars['String']>;
  backgroundprof2?: Maybe<Scalars['String']>;
  backgroundprof3?: Maybe<Scalars['String']>;
  backgroundprof4?: Maybe<Scalars['String']>;
  backgroundprof5?: Maybe<Scalars['String']>;
  backgroundprof6?: Maybe<Scalars['String']>;
  bearing?: Maybe<Scalars['String']>;
  bearingmodifier?: Maybe<Scalars['String']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  brawlprof?: Maybe<Scalars['String']>;
  charisma?: Maybe<Scalars['Int']>;
  charismaprof?: Maybe<Scalars['String']>;
  chronicle?: Maybe<Scalars['String']>;
  chronicledescription?: Maybe<Scalars['String']>;
  clan?: Maybe<Scalars['String']>;
  combodisciplinename1?: Maybe<Scalars['String']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  combodisciplineprof1?: Maybe<Scalars['String']>;
  computer?: Maybe<Scalars['Int']>;
  computerprof?: Maybe<Scalars['String']>;
  concept?: Maybe<Scalars['String']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  demeanor?: Maybe<Scalars['String']>;
  demeanordescription?: Maybe<Scalars['String']>;
  descriptionnote?: Maybe<Scalars['String']>;
  dexterity?: Maybe<Scalars['Int']>;
  dexterityprof?: Maybe<Scalars['String']>;
  disciplinename1?: Maybe<Scalars['String']>;
  disciplinename2?: Maybe<Scalars['String']>;
  disciplinename3?: Maybe<Scalars['String']>;
  disciplinename4?: Maybe<Scalars['String']>;
  disciplinename5?: Maybe<Scalars['String']>;
  disciplinename6?: Maybe<Scalars['String']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  disciplineprof1?: Maybe<Scalars['String']>;
  disciplineprof2?: Maybe<Scalars['String']>;
  disciplineprof3?: Maybe<Scalars['String']>;
  disciplineprof4?: Maybe<Scalars['String']>;
  disciplineprof5?: Maybe<Scalars['String']>;
  disciplineprof6?: Maybe<Scalars['String']>;
  drive?: Maybe<Scalars['Int']>;
  driveprof?: Maybe<Scalars['String']>;
  empathy?: Maybe<Scalars['Int']>;
  empathyprof?: Maybe<Scalars['String']>;
  etiquette?: Maybe<Scalars['Int']>;
  etiquetteprof?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  expressionprof?: Maybe<Scalars['String']>;
  extraknowledgename?: Maybe<Scalars['String']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraknowledgeprof?: Maybe<Scalars['String']>;
  extraskillname?: Maybe<Scalars['String']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extraskillprof?: Maybe<Scalars['String']>;
  extratalentname?: Maybe<Scalars['String']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  extratalentprof?: Maybe<Scalars['String']>;
  finance?: Maybe<Scalars['Int']>;
  financeprof?: Maybe<Scalars['String']>;
  firearms?: Maybe<Scalars['Int']>;
  firearmsprof?: Maybe<Scalars['String']>;
  flawname1?: Maybe<Scalars['String']>;
  flawname2?: Maybe<Scalars['String']>;
  flawname3?: Maybe<Scalars['String']>;
  flawname4?: Maybe<Scalars['String']>;
  flawname5?: Maybe<Scalars['String']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  flawprof1?: Maybe<Scalars['String']>;
  flawprof2?: Maybe<Scalars['String']>;
  flawprof3?: Maybe<Scalars['String']>;
  flawprof4?: Maybe<Scalars['String']>;
  flawprof5?: Maybe<Scalars['String']>;
  generation?: Maybe<Scalars['Int']>;
  generationdescription?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intelligenceprof?: Maybe<Scalars['String']>;
  intimidation?: Maybe<Scalars['Int']>;
  intimidationprof?: Maybe<Scalars['String']>;
  investigation?: Maybe<Scalars['Int']>;
  investigationprof?: Maybe<Scalars['String']>;
  larceny?: Maybe<Scalars['Int']>;
  larcenyprof?: Maybe<Scalars['String']>;
  law?: Maybe<Scalars['Int']>;
  lawprof?: Maybe<Scalars['String']>;
  leadership?: Maybe<Scalars['Int']>;
  leadershipprof?: Maybe<Scalars['String']>;
  manipulation?: Maybe<Scalars['Int']>;
  manipulationprof?: Maybe<Scalars['String']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  medicineprof?: Maybe<Scalars['String']>;
  melee?: Maybe<Scalars['Int']>;
  meleeprof?: Maybe<Scalars['String']>;
  meritname1?: Maybe<Scalars['String']>;
  meritname2?: Maybe<Scalars['String']>;
  meritname3?: Maybe<Scalars['String']>;
  meritname4?: Maybe<Scalars['String']>;
  meritname5?: Maybe<Scalars['String']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  meritprof1?: Maybe<Scalars['String']>;
  meritprof2?: Maybe<Scalars['String']>;
  meritprof3?: Maybe<Scalars['String']>;
  meritprof4?: Maybe<Scalars['String']>;
  meritprof5?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nature?: Maybe<Scalars['String']>;
  naturedescription?: Maybe<Scalars['String']>;
  natureregain?: Maybe<Scalars['String']>;
  occult?: Maybe<Scalars['Int']>;
  occultprof?: Maybe<Scalars['String']>;
  othernotes?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  perception?: Maybe<Scalars['Int']>;
  perceptionprof?: Maybe<Scalars['String']>;
  performance?: Maybe<Scalars['Int']>;
  performanceprof?: Maybe<Scalars['String']>;
  politics?: Maybe<Scalars['Int']>;
  politicsprof?: Maybe<Scalars['String']>;
  roleplayinghints?: Maybe<Scalars['String']>;
  science?: Maybe<Scalars['Int']>;
  scienceprof?: Maybe<Scalars['String']>;
  sect?: Maybe<Scalars['String']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  sheettype?: Maybe<Scalars['String']>;
  sire?: Maybe<Scalars['String']>;
  stamina?: Maybe<Scalars['Int']>;
  staminaprof?: Maybe<Scalars['String']>;
  stealth?: Maybe<Scalars['Int']>;
  stealthprof?: Maybe<Scalars['String']>;
  streetwise?: Maybe<Scalars['Int']>;
  streetwiseprof?: Maybe<Scalars['String']>;
  strength?: Maybe<Scalars['Int']>;
  strengthprof?: Maybe<Scalars['String']>;
  subterfuge?: Maybe<Scalars['Int']>;
  subterfugeprof?: Maybe<Scalars['String']>;
  survival?: Maybe<Scalars['Int']>;
  survivalprof?: Maybe<Scalars['String']>;
  technology?: Maybe<Scalars['Int']>;
  technologyprof?: Maybe<Scalars['String']>;
  useconviction?: Maybe<Scalars['bit']>;
  useinstinct?: Maybe<Scalars['bit']>;
  usepath?: Maybe<Scalars['bit']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
  weakness?: Maybe<Scalars['String']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
  witsprof?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Characters_Stddev_Fields = {
  __typename?: 'characters_stddev_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Characters_Stddev_Pop_Fields = {
  __typename?: 'characters_stddev_pop_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Characters_Stddev_Samp_Fields = {
  __typename?: 'characters_stddev_samp_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Characters_Sum_Fields = {
  __typename?: 'characters_sum_fields';
  academics?: Maybe<Scalars['Int']>;
  alertness?: Maybe<Scalars['Int']>;
  animalken?: Maybe<Scalars['Int']>;
  appearance?: Maybe<Scalars['Int']>;
  athletics?: Maybe<Scalars['Int']>;
  awareness?: Maybe<Scalars['Int']>;
  backgroundpoints1?: Maybe<Scalars['Int']>;
  backgroundpoints2?: Maybe<Scalars['Int']>;
  backgroundpoints3?: Maybe<Scalars['Int']>;
  backgroundpoints4?: Maybe<Scalars['Int']>;
  backgroundpoints5?: Maybe<Scalars['Int']>;
  backgroundpoints6?: Maybe<Scalars['Int']>;
  bloodperturn?: Maybe<Scalars['Int']>;
  bloodpool?: Maybe<Scalars['Int']>;
  brawl?: Maybe<Scalars['Int']>;
  charisma?: Maybe<Scalars['Int']>;
  combodisciplinepoints1?: Maybe<Scalars['Int']>;
  computer?: Maybe<Scalars['Int']>;
  conscience?: Maybe<Scalars['Int']>;
  courage?: Maybe<Scalars['Int']>;
  crafts?: Maybe<Scalars['Int']>;
  dexterity?: Maybe<Scalars['Int']>;
  disciplinepoints1?: Maybe<Scalars['Int']>;
  disciplinepoints2?: Maybe<Scalars['Int']>;
  disciplinepoints3?: Maybe<Scalars['Int']>;
  disciplinepoints4?: Maybe<Scalars['Int']>;
  disciplinepoints5?: Maybe<Scalars['Int']>;
  disciplinepoints6?: Maybe<Scalars['Int']>;
  drive?: Maybe<Scalars['Int']>;
  empathy?: Maybe<Scalars['Int']>;
  etiquette?: Maybe<Scalars['Int']>;
  experience?: Maybe<Scalars['Int']>;
  expression?: Maybe<Scalars['Int']>;
  extraknowledgepoints?: Maybe<Scalars['Int']>;
  extraskillpoints?: Maybe<Scalars['Int']>;
  extratalentpoints?: Maybe<Scalars['Int']>;
  finance?: Maybe<Scalars['Int']>;
  firearms?: Maybe<Scalars['Int']>;
  flawpoints1?: Maybe<Scalars['Int']>;
  flawpoints2?: Maybe<Scalars['Int']>;
  flawpoints3?: Maybe<Scalars['Int']>;
  flawpoints4?: Maybe<Scalars['Int']>;
  flawpoints5?: Maybe<Scalars['Int']>;
  generation?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  humanity?: Maybe<Scalars['Int']>;
  intelligence?: Maybe<Scalars['Int']>;
  intimidation?: Maybe<Scalars['Int']>;
  investigation?: Maybe<Scalars['Int']>;
  larceny?: Maybe<Scalars['Int']>;
  law?: Maybe<Scalars['Int']>;
  leadership?: Maybe<Scalars['Int']>;
  manipulation?: Maybe<Scalars['Int']>;
  maxwillpower?: Maybe<Scalars['Int']>;
  medicine?: Maybe<Scalars['Int']>;
  melee?: Maybe<Scalars['Int']>;
  meritpoints1?: Maybe<Scalars['Int']>;
  meritpoints2?: Maybe<Scalars['Int']>;
  meritpoints3?: Maybe<Scalars['Int']>;
  meritpoints4?: Maybe<Scalars['Int']>;
  meritpoints5?: Maybe<Scalars['Int']>;
  occult?: Maybe<Scalars['Int']>;
  perception?: Maybe<Scalars['Int']>;
  performance?: Maybe<Scalars['Int']>;
  politics?: Maybe<Scalars['Int']>;
  science?: Maybe<Scalars['Int']>;
  selfcontrol?: Maybe<Scalars['Int']>;
  stamina?: Maybe<Scalars['Int']>;
  stealth?: Maybe<Scalars['Int']>;
  streetwise?: Maybe<Scalars['Int']>;
  strength?: Maybe<Scalars['Int']>;
  subterfuge?: Maybe<Scalars['Int']>;
  survival?: Maybe<Scalars['Int']>;
  technology?: Maybe<Scalars['Int']>;
  willpower?: Maybe<Scalars['Int']>;
  wits?: Maybe<Scalars['Int']>;
};

/** update columns of table "characters" */
export enum Characters_Update_Column {
  /** column name */
  Academics = 'academics',
  /** column name */
  Academicsprof = 'academicsprof',
  /** column name */
  Agecategory = 'agecategory',
  /** column name */
  Alertness = 'alertness',
  /** column name */
  Alertnessprof = 'alertnessprof',
  /** column name */
  Animalken = 'animalken',
  /** column name */
  Animalkenprof = 'animalkenprof',
  /** column name */
  Appearance = 'appearance',
  /** column name */
  Appearanceprof = 'appearanceprof',
  /** column name */
  Athletics = 'athletics',
  /** column name */
  Athleticsprof = 'athleticsprof',
  /** column name */
  Awareness = 'awareness',
  /** column name */
  Awarenessprof = 'awarenessprof',
  /** column name */
  Backgroundname1 = 'backgroundname1',
  /** column name */
  Backgroundname2 = 'backgroundname2',
  /** column name */
  Backgroundname3 = 'backgroundname3',
  /** column name */
  Backgroundname4 = 'backgroundname4',
  /** column name */
  Backgroundname5 = 'backgroundname5',
  /** column name */
  Backgroundname6 = 'backgroundname6',
  /** column name */
  Backgroundnote = 'backgroundnote',
  /** column name */
  Backgroundpoints1 = 'backgroundpoints1',
  /** column name */
  Backgroundpoints2 = 'backgroundpoints2',
  /** column name */
  Backgroundpoints3 = 'backgroundpoints3',
  /** column name */
  Backgroundpoints4 = 'backgroundpoints4',
  /** column name */
  Backgroundpoints5 = 'backgroundpoints5',
  /** column name */
  Backgroundpoints6 = 'backgroundpoints6',
  /** column name */
  Backgroundprof1 = 'backgroundprof1',
  /** column name */
  Backgroundprof2 = 'backgroundprof2',
  /** column name */
  Backgroundprof3 = 'backgroundprof3',
  /** column name */
  Backgroundprof4 = 'backgroundprof4',
  /** column name */
  Backgroundprof5 = 'backgroundprof5',
  /** column name */
  Backgroundprof6 = 'backgroundprof6',
  /** column name */
  Bearing = 'bearing',
  /** column name */
  Bearingmodifier = 'bearingmodifier',
  /** column name */
  Bloodperturn = 'bloodperturn',
  /** column name */
  Bloodpool = 'bloodpool',
  /** column name */
  Brawl = 'brawl',
  /** column name */
  Brawlprof = 'brawlprof',
  /** column name */
  Charisma = 'charisma',
  /** column name */
  Charismaprof = 'charismaprof',
  /** column name */
  Chronicle = 'chronicle',
  /** column name */
  Chronicledescription = 'chronicledescription',
  /** column name */
  Clan = 'clan',
  /** column name */
  Combodisciplinename1 = 'combodisciplinename1',
  /** column name */
  Combodisciplinepoints1 = 'combodisciplinepoints1',
  /** column name */
  Combodisciplineprof1 = 'combodisciplineprof1',
  /** column name */
  Computer = 'computer',
  /** column name */
  Computerprof = 'computerprof',
  /** column name */
  Concept = 'concept',
  /** column name */
  Conscience = 'conscience',
  /** column name */
  Courage = 'courage',
  /** column name */
  Crafts = 'crafts',
  /** column name */
  Demeanor = 'demeanor',
  /** column name */
  Demeanordescription = 'demeanordescription',
  /** column name */
  Descriptionnote = 'descriptionnote',
  /** column name */
  Dexterity = 'dexterity',
  /** column name */
  Dexterityprof = 'dexterityprof',
  /** column name */
  Disciplinename1 = 'disciplinename1',
  /** column name */
  Disciplinename2 = 'disciplinename2',
  /** column name */
  Disciplinename3 = 'disciplinename3',
  /** column name */
  Disciplinename4 = 'disciplinename4',
  /** column name */
  Disciplinename5 = 'disciplinename5',
  /** column name */
  Disciplinename6 = 'disciplinename6',
  /** column name */
  Disciplinepoints1 = 'disciplinepoints1',
  /** column name */
  Disciplinepoints2 = 'disciplinepoints2',
  /** column name */
  Disciplinepoints3 = 'disciplinepoints3',
  /** column name */
  Disciplinepoints4 = 'disciplinepoints4',
  /** column name */
  Disciplinepoints5 = 'disciplinepoints5',
  /** column name */
  Disciplinepoints6 = 'disciplinepoints6',
  /** column name */
  Disciplineprof1 = 'disciplineprof1',
  /** column name */
  Disciplineprof2 = 'disciplineprof2',
  /** column name */
  Disciplineprof3 = 'disciplineprof3',
  /** column name */
  Disciplineprof4 = 'disciplineprof4',
  /** column name */
  Disciplineprof5 = 'disciplineprof5',
  /** column name */
  Disciplineprof6 = 'disciplineprof6',
  /** column name */
  Drive = 'drive',
  /** column name */
  Driveprof = 'driveprof',
  /** column name */
  Empathy = 'empathy',
  /** column name */
  Empathyprof = 'empathyprof',
  /** column name */
  Etiquette = 'etiquette',
  /** column name */
  Etiquetteprof = 'etiquetteprof',
  /** column name */
  Experience = 'experience',
  /** column name */
  Expression = 'expression',
  /** column name */
  Expressionprof = 'expressionprof',
  /** column name */
  Extraknowledgename = 'extraknowledgename',
  /** column name */
  Extraknowledgepoints = 'extraknowledgepoints',
  /** column name */
  Extraknowledgeprof = 'extraknowledgeprof',
  /** column name */
  Extraskillname = 'extraskillname',
  /** column name */
  Extraskillpoints = 'extraskillpoints',
  /** column name */
  Extraskillprof = 'extraskillprof',
  /** column name */
  Extratalentname = 'extratalentname',
  /** column name */
  Extratalentpoints = 'extratalentpoints',
  /** column name */
  Extratalentprof = 'extratalentprof',
  /** column name */
  Finance = 'finance',
  /** column name */
  Financeprof = 'financeprof',
  /** column name */
  Firearms = 'firearms',
  /** column name */
  Firearmsprof = 'firearmsprof',
  /** column name */
  Flawname1 = 'flawname1',
  /** column name */
  Flawname2 = 'flawname2',
  /** column name */
  Flawname3 = 'flawname3',
  /** column name */
  Flawname4 = 'flawname4',
  /** column name */
  Flawname5 = 'flawname5',
  /** column name */
  Flawpoints1 = 'flawpoints1',
  /** column name */
  Flawpoints2 = 'flawpoints2',
  /** column name */
  Flawpoints3 = 'flawpoints3',
  /** column name */
  Flawpoints4 = 'flawpoints4',
  /** column name */
  Flawpoints5 = 'flawpoints5',
  /** column name */
  Flawprof1 = 'flawprof1',
  /** column name */
  Flawprof2 = 'flawprof2',
  /** column name */
  Flawprof3 = 'flawprof3',
  /** column name */
  Flawprof4 = 'flawprof4',
  /** column name */
  Flawprof5 = 'flawprof5',
  /** column name */
  Generation = 'generation',
  /** column name */
  Generationdescription = 'generationdescription',
  /** column name */
  Health = 'health',
  /** column name */
  Humanity = 'humanity',
  /** column name */
  Intelligence = 'intelligence',
  /** column name */
  Intelligenceprof = 'intelligenceprof',
  /** column name */
  Intimidation = 'intimidation',
  /** column name */
  Intimidationprof = 'intimidationprof',
  /** column name */
  Investigation = 'investigation',
  /** column name */
  Investigationprof = 'investigationprof',
  /** column name */
  Larceny = 'larceny',
  /** column name */
  Larcenyprof = 'larcenyprof',
  /** column name */
  Law = 'law',
  /** column name */
  Lawprof = 'lawprof',
  /** column name */
  Leadership = 'leadership',
  /** column name */
  Leadershipprof = 'leadershipprof',
  /** column name */
  Manipulation = 'manipulation',
  /** column name */
  Manipulationprof = 'manipulationprof',
  /** column name */
  Maxwillpower = 'maxwillpower',
  /** column name */
  Medicine = 'medicine',
  /** column name */
  Medicineprof = 'medicineprof',
  /** column name */
  Melee = 'melee',
  /** column name */
  Meleeprof = 'meleeprof',
  /** column name */
  Meritname1 = 'meritname1',
  /** column name */
  Meritname2 = 'meritname2',
  /** column name */
  Meritname3 = 'meritname3',
  /** column name */
  Meritname4 = 'meritname4',
  /** column name */
  Meritname5 = 'meritname5',
  /** column name */
  Meritpoints1 = 'meritpoints1',
  /** column name */
  Meritpoints2 = 'meritpoints2',
  /** column name */
  Meritpoints3 = 'meritpoints3',
  /** column name */
  Meritpoints4 = 'meritpoints4',
  /** column name */
  Meritpoints5 = 'meritpoints5',
  /** column name */
  Meritprof1 = 'meritprof1',
  /** column name */
  Meritprof2 = 'meritprof2',
  /** column name */
  Meritprof3 = 'meritprof3',
  /** column name */
  Meritprof4 = 'meritprof4',
  /** column name */
  Meritprof5 = 'meritprof5',
  /** column name */
  Name = 'name',
  /** column name */
  Nature = 'nature',
  /** column name */
  Naturedescription = 'naturedescription',
  /** column name */
  Natureregain = 'natureregain',
  /** column name */
  Occult = 'occult',
  /** column name */
  Occultprof = 'occultprof',
  /** column name */
  Othernotes = 'othernotes',
  /** column name */
  Path = 'path',
  /** column name */
  Perception = 'perception',
  /** column name */
  Perceptionprof = 'perceptionprof',
  /** column name */
  Performance = 'performance',
  /** column name */
  Performanceprof = 'performanceprof',
  /** column name */
  Politics = 'politics',
  /** column name */
  Politicsprof = 'politicsprof',
  /** column name */
  Roleplayinghints = 'roleplayinghints',
  /** column name */
  Science = 'science',
  /** column name */
  Scienceprof = 'scienceprof',
  /** column name */
  Sect = 'sect',
  /** column name */
  Selfcontrol = 'selfcontrol',
  /** column name */
  Sheettype = 'sheettype',
  /** column name */
  Sire = 'sire',
  /** column name */
  Stamina = 'stamina',
  /** column name */
  Staminaprof = 'staminaprof',
  /** column name */
  Stealth = 'stealth',
  /** column name */
  Stealthprof = 'stealthprof',
  /** column name */
  Streetwise = 'streetwise',
  /** column name */
  Streetwiseprof = 'streetwiseprof',
  /** column name */
  Strength = 'strength',
  /** column name */
  Strengthprof = 'strengthprof',
  /** column name */
  Subterfuge = 'subterfuge',
  /** column name */
  Subterfugeprof = 'subterfugeprof',
  /** column name */
  Survival = 'survival',
  /** column name */
  Survivalprof = 'survivalprof',
  /** column name */
  Technology = 'technology',
  /** column name */
  Technologyprof = 'technologyprof',
  /** column name */
  Useconviction = 'useconviction',
  /** column name */
  Useinstinct = 'useinstinct',
  /** column name */
  Usepath = 'usepath',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Weakness = 'weakness',
  /** column name */
  Willpower = 'willpower',
  /** column name */
  Wits = 'wits',
  /** column name */
  Witsprof = 'witsprof'
}

/** aggregate var_pop on columns */
export type Characters_Var_Pop_Fields = {
  __typename?: 'characters_var_pop_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Characters_Var_Samp_Fields = {
  __typename?: 'characters_var_samp_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Characters_Variance_Fields = {
  __typename?: 'characters_variance_fields';
  academics?: Maybe<Scalars['Float']>;
  alertness?: Maybe<Scalars['Float']>;
  animalken?: Maybe<Scalars['Float']>;
  appearance?: Maybe<Scalars['Float']>;
  athletics?: Maybe<Scalars['Float']>;
  awareness?: Maybe<Scalars['Float']>;
  backgroundpoints1?: Maybe<Scalars['Float']>;
  backgroundpoints2?: Maybe<Scalars['Float']>;
  backgroundpoints3?: Maybe<Scalars['Float']>;
  backgroundpoints4?: Maybe<Scalars['Float']>;
  backgroundpoints5?: Maybe<Scalars['Float']>;
  backgroundpoints6?: Maybe<Scalars['Float']>;
  bloodperturn?: Maybe<Scalars['Float']>;
  bloodpool?: Maybe<Scalars['Float']>;
  brawl?: Maybe<Scalars['Float']>;
  charisma?: Maybe<Scalars['Float']>;
  combodisciplinepoints1?: Maybe<Scalars['Float']>;
  computer?: Maybe<Scalars['Float']>;
  conscience?: Maybe<Scalars['Float']>;
  courage?: Maybe<Scalars['Float']>;
  crafts?: Maybe<Scalars['Float']>;
  dexterity?: Maybe<Scalars['Float']>;
  disciplinepoints1?: Maybe<Scalars['Float']>;
  disciplinepoints2?: Maybe<Scalars['Float']>;
  disciplinepoints3?: Maybe<Scalars['Float']>;
  disciplinepoints4?: Maybe<Scalars['Float']>;
  disciplinepoints5?: Maybe<Scalars['Float']>;
  disciplinepoints6?: Maybe<Scalars['Float']>;
  drive?: Maybe<Scalars['Float']>;
  empathy?: Maybe<Scalars['Float']>;
  etiquette?: Maybe<Scalars['Float']>;
  experience?: Maybe<Scalars['Float']>;
  expression?: Maybe<Scalars['Float']>;
  extraknowledgepoints?: Maybe<Scalars['Float']>;
  extraskillpoints?: Maybe<Scalars['Float']>;
  extratalentpoints?: Maybe<Scalars['Float']>;
  finance?: Maybe<Scalars['Float']>;
  firearms?: Maybe<Scalars['Float']>;
  flawpoints1?: Maybe<Scalars['Float']>;
  flawpoints2?: Maybe<Scalars['Float']>;
  flawpoints3?: Maybe<Scalars['Float']>;
  flawpoints4?: Maybe<Scalars['Float']>;
  flawpoints5?: Maybe<Scalars['Float']>;
  generation?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  humanity?: Maybe<Scalars['Float']>;
  intelligence?: Maybe<Scalars['Float']>;
  intimidation?: Maybe<Scalars['Float']>;
  investigation?: Maybe<Scalars['Float']>;
  larceny?: Maybe<Scalars['Float']>;
  law?: Maybe<Scalars['Float']>;
  leadership?: Maybe<Scalars['Float']>;
  manipulation?: Maybe<Scalars['Float']>;
  maxwillpower?: Maybe<Scalars['Float']>;
  medicine?: Maybe<Scalars['Float']>;
  melee?: Maybe<Scalars['Float']>;
  meritpoints1?: Maybe<Scalars['Float']>;
  meritpoints2?: Maybe<Scalars['Float']>;
  meritpoints3?: Maybe<Scalars['Float']>;
  meritpoints4?: Maybe<Scalars['Float']>;
  meritpoints5?: Maybe<Scalars['Float']>;
  occult?: Maybe<Scalars['Float']>;
  perception?: Maybe<Scalars['Float']>;
  performance?: Maybe<Scalars['Float']>;
  politics?: Maybe<Scalars['Float']>;
  science?: Maybe<Scalars['Float']>;
  selfcontrol?: Maybe<Scalars['Float']>;
  stamina?: Maybe<Scalars['Float']>;
  stealth?: Maybe<Scalars['Float']>;
  streetwise?: Maybe<Scalars['Float']>;
  strength?: Maybe<Scalars['Float']>;
  subterfuge?: Maybe<Scalars['Float']>;
  survival?: Maybe<Scalars['Float']>;
  technology?: Maybe<Scalars['Float']>;
  willpower?: Maybe<Scalars['Float']>;
  wits?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "chronicles" */
export type Chronicles = {
  __typename?: 'chronicles';
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid: Scalars['uuid'];
};

/** aggregated selection of "chronicles" */
export type Chronicles_Aggregate = {
  __typename?: 'chronicles_aggregate';
  aggregate?: Maybe<Chronicles_Aggregate_Fields>;
  nodes: Array<Chronicles>;
};

/** aggregate fields of "chronicles" */
export type Chronicles_Aggregate_Fields = {
  __typename?: 'chronicles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chronicles_Max_Fields>;
  min?: Maybe<Chronicles_Min_Fields>;
};


/** aggregate fields of "chronicles" */
export type Chronicles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chronicles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chronicles". All fields are combined with a logical 'AND'. */
export type Chronicles_Bool_Exp = {
  _and?: Maybe<Array<Chronicles_Bool_Exp>>;
  _not?: Maybe<Chronicles_Bool_Exp>;
  _or?: Maybe<Array<Chronicles_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "chronicles" */
export enum Chronicles_Constraint {
  /** unique or primary key constraint */
  ChroniclesPkey = 'chronicles_pkey'
}

/** input type for inserting data into table "chronicles" */
export type Chronicles_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Chronicles_Max_Fields = {
  __typename?: 'chronicles_max_fields';
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Chronicles_Min_Fields = {
  __typename?: 'chronicles_min_fields';
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "chronicles" */
export type Chronicles_Mutation_Response = {
  __typename?: 'chronicles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chronicles>;
};

/** on conflict condition type for table "chronicles" */
export type Chronicles_On_Conflict = {
  constraint: Chronicles_Constraint;
  update_columns?: Array<Chronicles_Update_Column>;
  where?: Maybe<Chronicles_Bool_Exp>;
};

/** Ordering options when selecting data from "chronicles". */
export type Chronicles_Order_By = {
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: chronicles */
export type Chronicles_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "chronicles" */
export enum Chronicles_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "chronicles" */
export type Chronicles_Set_Input = {
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "chronicles" */
export enum Chronicles_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  RegisterUser?: Maybe<RegisterUserOutput>;
  /** delete data from the table: "characters" */
  delete_characters?: Maybe<Characters_Mutation_Response>;
  /** delete single row from the table: "characters" */
  delete_characters_by_pk?: Maybe<Characters>;
  /** delete data from the table: "chronicles" */
  delete_chronicles?: Maybe<Chronicles_Mutation_Response>;
  /** delete single row from the table: "chronicles" */
  delete_chronicles_by_pk?: Maybe<Chronicles>;
  /** delete data from the table: "notes" */
  delete_notes?: Maybe<Notes_Mutation_Response>;
  /** delete single row from the table: "notes" */
  delete_notes_by_pk?: Maybe<Notes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "characters" */
  insert_characters?: Maybe<Characters_Mutation_Response>;
  /** insert a single row into the table: "characters" */
  insert_characters_one?: Maybe<Characters>;
  /** insert data into the table: "chronicles" */
  insert_chronicles?: Maybe<Chronicles_Mutation_Response>;
  /** insert a single row into the table: "chronicles" */
  insert_chronicles_one?: Maybe<Chronicles>;
  /** insert data into the table: "notes" */
  insert_notes?: Maybe<Notes_Mutation_Response>;
  /** insert a single row into the table: "notes" */
  insert_notes_one?: Maybe<Notes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "characters" */
  update_characters?: Maybe<Characters_Mutation_Response>;
  /** update single row of the table: "characters" */
  update_characters_by_pk?: Maybe<Characters>;
  /** update data of the table: "chronicles" */
  update_chronicles?: Maybe<Chronicles_Mutation_Response>;
  /** update single row of the table: "chronicles" */
  update_chronicles_by_pk?: Maybe<Chronicles>;
  /** update data of the table: "notes" */
  update_notes?: Maybe<Notes_Mutation_Response>;
  /** update single row of the table: "notes" */
  update_notes_by_pk?: Maybe<Notes>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootRegisterUserArgs = {
  name: Scalars['String'];
  uuid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CharactersArgs = {
  where: Characters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Characters_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ChroniclesArgs = {
  where: Chronicles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chronicles_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_NotesArgs = {
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uuid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CharactersArgs = {
  objects: Array<Characters_Insert_Input>;
  on_conflict?: Maybe<Characters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Characters_OneArgs = {
  object: Characters_Insert_Input;
  on_conflict?: Maybe<Characters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChroniclesArgs = {
  objects: Array<Chronicles_Insert_Input>;
  on_conflict?: Maybe<Chronicles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chronicles_OneArgs = {
  object: Chronicles_Insert_Input;
  on_conflict?: Maybe<Chronicles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotesArgs = {
  objects: Array<Notes_Insert_Input>;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notes_OneArgs = {
  object: Notes_Insert_Input;
  on_conflict?: Maybe<Notes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CharactersArgs = {
  _inc?: Maybe<Characters_Inc_Input>;
  _set?: Maybe<Characters_Set_Input>;
  where: Characters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_By_PkArgs = {
  _inc?: Maybe<Characters_Inc_Input>;
  _set?: Maybe<Characters_Set_Input>;
  pk_columns: Characters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChroniclesArgs = {
  _set?: Maybe<Chronicles_Set_Input>;
  where: Chronicles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chronicles_By_PkArgs = {
  _set?: Maybe<Chronicles_Set_Input>;
  pk_columns: Chronicles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NotesArgs = {
  _set?: Maybe<Notes_Set_Input>;
  where: Notes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notes_By_PkArgs = {
  _set?: Maybe<Notes_Set_Input>;
  pk_columns: Notes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "notes" */
export type Notes = {
  __typename?: 'notes';
  character_id: Scalars['uuid'];
  content: Scalars['String'];
  name: Scalars['String'];
  user_id: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "notes" */
export type Notes_Aggregate = {
  __typename?: 'notes_aggregate';
  aggregate?: Maybe<Notes_Aggregate_Fields>;
  nodes: Array<Notes>;
};

/** aggregate fields of "notes" */
export type Notes_Aggregate_Fields = {
  __typename?: 'notes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Notes_Max_Fields>;
  min?: Maybe<Notes_Min_Fields>;
};


/** aggregate fields of "notes" */
export type Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "notes". All fields are combined with a logical 'AND'. */
export type Notes_Bool_Exp = {
  _and?: Maybe<Array<Notes_Bool_Exp>>;
  _not?: Maybe<Notes_Bool_Exp>;
  _or?: Maybe<Array<Notes_Bool_Exp>>;
  character_id?: Maybe<Uuid_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notes" */
export enum Notes_Constraint {
  /** unique or primary key constraint */
  NotesPkey = 'notes_pkey'
}

/** input type for inserting data into table "notes" */
export type Notes_Insert_Input = {
  character_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Notes_Max_Fields = {
  __typename?: 'notes_max_fields';
  character_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Notes_Min_Fields = {
  __typename?: 'notes_min_fields';
  character_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "notes" */
export type Notes_Mutation_Response = {
  __typename?: 'notes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notes>;
};

/** on conflict condition type for table "notes" */
export type Notes_On_Conflict = {
  constraint: Notes_Constraint;
  update_columns?: Array<Notes_Update_Column>;
  where?: Maybe<Notes_Bool_Exp>;
};

/** Ordering options when selecting data from "notes". */
export type Notes_Order_By = {
  character_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: notes */
export type Notes_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "notes" */
export enum Notes_Select_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  Content = 'content',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "notes" */
export type Notes_Set_Input = {
  character_id?: Maybe<Scalars['uuid']>;
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "notes" */
export enum Notes_Update_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  Content = 'content',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch aggregated fields from the table: "characters" */
  characters_aggregate: Characters_Aggregate;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** fetch data from the table: "chronicles" */
  chronicles: Array<Chronicles>;
  /** fetch aggregated fields from the table: "chronicles" */
  chronicles_aggregate: Chronicles_Aggregate;
  /** fetch data from the table: "chronicles" using primary key columns */
  chronicles_by_pk?: Maybe<Chronicles>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootChroniclesArgs = {
  distinct_on?: Maybe<Array<Chronicles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chronicles_Order_By>>;
  where?: Maybe<Chronicles_Bool_Exp>;
};


export type Query_RootChronicles_AggregateArgs = {
  distinct_on?: Maybe<Array<Chronicles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chronicles_Order_By>>;
  where?: Maybe<Chronicles_Bool_Exp>;
};


export type Query_RootChronicles_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Query_RootNotes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  uuid: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch aggregated fields from the table: "characters" */
  characters_aggregate: Characters_Aggregate;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** fetch data from the table: "chronicles" */
  chronicles: Array<Chronicles>;
  /** fetch aggregated fields from the table: "chronicles" */
  chronicles_aggregate: Chronicles_Aggregate;
  /** fetch data from the table: "chronicles" using primary key columns */
  chronicles_by_pk?: Maybe<Chronicles>;
  /** fetch data from the table: "notes" */
  notes: Array<Notes>;
  /** fetch aggregated fields from the table: "notes" */
  notes_aggregate: Notes_Aggregate;
  /** fetch data from the table: "notes" using primary key columns */
  notes_by_pk?: Maybe<Notes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootChroniclesArgs = {
  distinct_on?: Maybe<Array<Chronicles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chronicles_Order_By>>;
  where?: Maybe<Chronicles_Bool_Exp>;
};


export type Subscription_RootChronicles_AggregateArgs = {
  distinct_on?: Maybe<Array<Chronicles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chronicles_Order_By>>;
  where?: Maybe<Chronicles_Bool_Exp>;
};


export type Subscription_RootChronicles_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootNotesArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_AggregateArgs = {
  distinct_on?: Maybe<Array<Notes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notes_Order_By>>;
  where?: Maybe<Notes_Bool_Exp>;
};


export type Subscription_RootNotes_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  uuid: Scalars['String'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  uuid: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  uuid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uuid: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetCharactersQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetCharactersQuery = (
  { __typename?: 'query_root' }
  & { characters: Array<(
    { __typename?: 'characters' }
    & Pick<Characters, 'name' | 'uuid' | 'user_id'>
  )> }
);

export type RegisterUserMutationVariables = Exact<{
  uuid: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'uuid' | 'email' | 'name'>
  )> }
);

export const GetCharactersDocument = gql`
    query GetCharacters($userId: String!) {
  characters(where: {user_id: {_eq: $userId}}) {
    name
    uuid
    user_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCharactersGQL extends Apollo.Query<GetCharactersQuery, GetCharactersQueryVariables> {
    document = GetCharactersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterUserDocument = gql`
    mutation RegisterUser($uuid: String!, $email: String!) {
  insert_users_one(object: {uuid: $uuid, email: $email}) {
    uuid
    email
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }