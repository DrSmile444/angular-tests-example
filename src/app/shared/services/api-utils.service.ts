import { Injectable } from '@angular/core';

@Injectable()
export class ApiUtilsService {
  makeUri(...chunks: (string | number)[]) {
    return chunks.join('/');
  }
}
