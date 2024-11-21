import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPsPageRoutingModule } from './formulario-ps-routing.module';

import { FormularioPsPage } from './formulario-ps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPsPageRoutingModule
  ],
  declarations: [FormularioPsPage]
})
export class FormularioPsPageModule {}
