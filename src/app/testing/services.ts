import { ApiService } from '../shared/services';
import { UserService } from '../user/services/user.service';
import { ConfigService } from '../services';

export type ServicesSpyParams = Map<any, { name: string, methods: string[] }>;

export const SERVICES_SPY_PARAMS = new Map<any, { name: string, methods: string[] }>([
  [ ApiService, { name: 'ApiService', methods: ['get'] } ],
  [ ConfigService, { name: 'ConfigService', methods: ['getConfig'] } ],
  [ UserService, { name: 'UserService', methods: ['getUser', 'getUsersList'] } ],
]);
