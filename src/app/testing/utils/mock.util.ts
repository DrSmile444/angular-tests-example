import { defer, Observable } from 'rxjs';

import { ClassFields, Newable } from '../../shared';
import { SERVICES_SPY_PARAMS, ServicesSpyParams } from '../services';


export class MockUtil {
  private static readonly spyParams: ServicesSpyParams = SERVICES_SPY_PARAMS;

  /**
   * Create async observable that emits-once and completes after a JS engine turn
   * @template T data type that will be returned
   * @param {T} data params that should be behave as async
   * @returns async observable with param
   * @memberof MockUtil
   */
  static asyncData<T>(data: T): Observable<T> {
    return defer(() => Promise.resolve(data));
  }

  /**
   * Create async observable error that errors after a JS engine turn
   * @template T data type that will be returned
   * @param {T} errorObject params that should be behave as async
   * @returns async observable with param
   * @memberof MockUtil
   */
  static asyncError<T>(errorObject: T): Observable<T> {
    return defer(() => Promise.reject(errorObject));
  }

  /**
   * Create module provider object
   * @param {*} service instance that needs a mock provider
   * @param {*} custom use custom mock
   * @returns {{ provide: any, useValue: any }} provide-object ready for module provides
   * @memberof MockUtil
   */
  static getProviderOf<T>(service: Newable<T>, custom?: ClassFields<T, T | any>): { provide: any, useValue: any } {
    const value = custom || MockUtil.getSpyObj(service);
    return { provide: service, useValue: value };
  }

  /**
   * Get jasmine spy object for service that needs a mock provider
   * @param {*} service instance that needs a mock provider
   * @returns {*} spy mocked service instance
   * @memberof MockUtil
   */
  // @ts-ignore simple
  static getSpyObj<T>(service: Newable<T>): jasmine.SpyObj<T> {
    // @ts-ignore
    const { name, methods } = MockUtil.spyParams.get(service);
    // @ts-ignore
    return jasmine.createSpyObj(name, methods);
  }
}
