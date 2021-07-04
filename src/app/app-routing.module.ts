import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigResolver } from './services';

const routes: Routes = [
  {
    path: 'users',
    resolve: { config: ConfigResolver },
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: '/users',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
