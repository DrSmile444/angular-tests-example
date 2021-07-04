import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Config } from '../shared/interfaces';

@Injectable()
export class ConfigService {
  config!: Config;

  constructor() {}

  getConfig(): Observable<Config> {
    return of({
      currentCity: 'Wisokyburgh',
      disabledCities: [
        'Gwenborough',
        'McKenziehaven',
      ]
    } as Config).pipe(
      tap((config) => this.config = config),
    );
  }
}
