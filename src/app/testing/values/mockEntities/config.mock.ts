import { Config } from '../../../shared';

export enum MOCK_CITY {
  CURRENT = 'Cherkasy',
  DISABLED_CITY_1 = 'Gwenborough',
  DISABLED_CITY_2 = 'McKenziehaven',
}

export const MOCK_CONFIG: Config = {
  currentCity: MOCK_CITY.CURRENT,
  disabledCities: [
    MOCK_CITY.DISABLED_CITY_1,
    MOCK_CITY.DISABLED_CITY_2,
  ]
};
