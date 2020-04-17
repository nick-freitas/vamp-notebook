import { DefaultDataServiceConfig } from '@ngrx/data';

export const dataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api',
  timeout: 3000 // request timeout
};
