import { DefaultHttpUrlGenerator, HttpResourceUrls } from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreHttpUrlGenerator extends DefaultHttpUrlGenerator {
  protected getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    const urls = super.getResourceUrls(entityName, root);
    urls.entityResourceUrl = urls.collectionResourceUrl;
    return urls;
  }
}
