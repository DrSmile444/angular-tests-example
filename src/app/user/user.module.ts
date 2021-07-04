import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { UserRoutingModule } from './user-routing.module';
import { userComponents } from './components';
import { userServices } from './services';


@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
  ],
  declarations: [...userComponents],
  providers: [...userServices],
  exports: [],
})
export class UserModule {
}
