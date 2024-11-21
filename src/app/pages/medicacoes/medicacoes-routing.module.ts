import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicacoesPage } from './medicacoes.page';

const routes: Routes = [
  {
    path: '',
    component: MedicacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicacoesPageRoutingModule {}
