import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPsPage } from './formulario-ps.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPsPageRoutingModule {}
