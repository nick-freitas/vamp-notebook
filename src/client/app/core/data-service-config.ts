import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/client/environments/environment';

export const dataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiUrl,
  timeout: 3000 // request timeout
};
