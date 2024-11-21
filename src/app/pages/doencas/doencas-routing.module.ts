import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoencasPage } from './doencas.page';

const routes: Routes = [
  {
    path: '',
    component: DoencasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoencasPageRoutingModule {}
