import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Character } from '../../../shared/models/character';
import { ErrorLogger } from '../core/error-logger';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CharactersService extends EntityCollectionServiceBase<Character> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private http: HttpClient, private errorLogger: ErrorLogger) {
    super('Character', serviceElementsFactory);
  }

  export(id: string) {
    return this.http
      .post(`characters/${id}/export`, {}, { responseType: 'blob' })
      .pipe(catchError(err => this.errorLogger.handleError(err)))
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        var newBlob = new Blob([x], { type: 'application/pdf' });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = 'CharacterSheet.pdf';
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function() {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }
}
