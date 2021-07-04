import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function mockOf<T>(methodName: string, args: object | any, data: T, delayValue: number = 500): Observable<T> {
  const invalidArguments = Object.keys(args).filter((key) => (
    !args[key] &&
    args[key] !== false
  ));

  console.group('MOCK: ' + methodName);
  console.log('***', 'ARGUMENTS:\n', { ...args });
  console.log('***', 'RETURNS:\n', data);
  invalidArguments.forEach((key) => console.error(`DevelopingError: Argument '${key}' has invalid value: ${args[key]}`));
  console.groupEnd();
  return delayedOf(data, delayValue);
}

export function delayedOf<T>(data: T, delayValue: number = 500): Observable<T> {
  return of(data).pipe(delay(delayValue));
}

export * from './common-mocks';
export * from './mockEntities';
