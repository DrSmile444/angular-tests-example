import { ComponentFixture, tick } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export function detectChanges(fixture: ComponentFixture<any>, millis: number = 1000) {
  tick(millis);
  fixture.detectChanges();
  tick(millis);
  fixture.detectChanges();
}

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

export * from './services';
export * from './testing-mocked-services';
export * from './testing.module';
export * from './utils';
export * from './values';
