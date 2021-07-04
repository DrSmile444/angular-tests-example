import { ComponentFixture, tick } from '@angular/core/testing';

export function detectChanges(fixture: ComponentFixture<any>, millis: number = 1000) {
  tick(millis);
  fixture.detectChanges();
  tick(millis);
  fixture.detectChanges();
}

export * from './services';
export * from './testing-mocked-services';
export * from './testing.module';
export * from './utils';
