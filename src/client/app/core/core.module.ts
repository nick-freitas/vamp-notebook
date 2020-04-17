import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, HttpUrlGenerator, EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { dataServiceConfig } from './data-service-config';
import { CoreHttpUrlGenerator } from './core-http-url-generator.service';
import { entityConfig } from './entity-metadata';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument(),
    RouterModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: CoreHttpUrlGenerator
    },
    { provide: DefaultDataServiceConfig, useValue: dataServiceConfig }
  ]
})
export class CoreModule {}
