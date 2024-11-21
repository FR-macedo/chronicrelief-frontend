import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioMsPage } from './formulario-ms.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioMsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioMsPageRoutingModule {}
