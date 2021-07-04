import { ApiService } from './api.service';
import { ApiUtilsService } from './api-utils.service';
import { appServices } from '../../services';

export const sharedServices = [
  ...appServices,
  ApiService,
  ApiUtilsService,
];

export * from './api-utils.service';
export * from './api.service';
