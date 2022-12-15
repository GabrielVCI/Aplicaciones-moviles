import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasASeguirPage } from './noticias-a-seguir.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasASeguirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasASeguirPageRoutingModule {}
