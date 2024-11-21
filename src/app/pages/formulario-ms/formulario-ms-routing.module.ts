import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioMSPage } from './formulario-ms.page';  // Note o MS maiúsculo

const routes: Routes = [
  {
    path: '',
    component: FormularioMSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioMsPageRoutingModule { }