import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { TestingMockedServices } from './testing-mocked-services';
import { ApiService } from '../shared';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [
    RouterTestingModule,
  ],
  providers: [
    ...TestingMockedServices,
    ApiService,
    { provide: 'Window',  useValue: window },
  ],
})
export class TestingModule {
  /**
   * Use this method when you need to import the module last of all
   * Angular resolves dependencies in turn and providers will be used from the last one
   * If we place TestingModule in another place, TestingMockedServices will be unavailable
   *
   * @example
   * You have this imports:
   *
   * imports: [
   *  TestingModule,
   *  ZonesModule,
   * ],
   *
   * ZonesModule will rewrite providers of TestingModule.
   * To prevent it, just use this method:
   *
   * imports: TestingModule.wrapImports([
   *  ZonesModule,
   * ]),
   *
   * */
  static wrapImports(imports: any[]) {
    return [
      ...imports,
      TestingModule,
    ];
  }
}
