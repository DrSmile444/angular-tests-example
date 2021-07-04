import { MockUtil } from './utils';
import { ConfigService } from '../services';
import { CommonMocks } from './values/common-mocks';
import { of } from 'rxjs';
import { UserService } from '../user/services';

const { getProviderOf } = MockUtil;

export const TestingMockedServices = [
  getProviderOf(ConfigService, {
    config: CommonMocks.config,
    getConfig: () => of(CommonMocks.config),
  }),
  getProviderOf(UserService, {
    getUser: () => of(CommonMocks.users[0]),
    getUsersList: () => of(CommonMocks.users),
  }),
]
