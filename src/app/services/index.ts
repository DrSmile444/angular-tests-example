import { ConfigResolver } from './config.resolver';
import { ConfigService } from './config.service';

export const appServices = [
  ConfigResolver,
  ConfigService,
];

export * from './config.resolver';
export * from './config.service';
