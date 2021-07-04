import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Config } from '../shared/interfaces';
import { ConfigService } from './config.service';

@Injectable()
export class ConfigResolver implements Resolve<Config> {
  constructor(private configService: ConfigService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    return this.configService.getConfig();
  }
}
