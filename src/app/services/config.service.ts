import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Config } from '../shared/interfaces';
import { CommonMocks, mockOf } from '../testing/values';

@Injectable()
export class ConfigService {
  config!: Config;

  constructor() {}

  getConfig(): Observable<Config> {
    return mockOf(this.getConfig.name, {}, CommonMocks.config).pipe(
      tap((config) => this.config = config),
    );
  }
}
