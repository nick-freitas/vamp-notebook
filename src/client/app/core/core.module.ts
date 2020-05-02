import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultDataServiceConfig, HttpUrlGenerator, EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { dataServiceConfig } from './data-service-config';
import { CoreHttpUrlGenerator } from './core-http-url-generator.service';
import { entityConfig } from './entity-metadata';
import { ErrorLogger } from './error-logger';
import { AppHttpInterceptor } from './app-http-interceptor';

@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), EntityDataModule.forRoot(entityConfig), StoreDevtoolsModule.instrument(), RouterModule],
  exports: [RouterModule],
  providers: [
    ErrorLogger,
    {
      provide: HttpUrlGenerator,
      useClass: CoreHttpUrlGenerator
    },
    { provide: DefaultDataServiceConfig, useValue: dataServiceConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
  ]
})
export class CoreModule {}
