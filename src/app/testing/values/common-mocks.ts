import { MOCK_CONFIG } from './mockEntities';
import { Config, User } from '../../shared';
import { MOCK_USERS } from './mockEntities/users.mock';

export class CommonMocks {
  static get config(): Config {
    return MOCK_CONFIG;
  }

  static get users(): User[] {
    return MOCK_USERS;
  }

  private static getDeepCopy<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
  }
}
