import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { sharedServices } from './services';
import { sharedComponents } from './components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [...sharedServices],
  declarations: [...sharedComponents],
  exports: [
    ...sharedComponents,
    CommonModule,
  ],
})
export class SharedModule {
}
