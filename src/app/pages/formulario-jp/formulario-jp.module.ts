import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioJpPageRoutingModule } from './formulario-jp-routing.module';

import { FormularioJpPage } from './formulario-jp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioJpPageRoutingModule
  ],
  declarations: [FormularioJpPage]
})
export class FormularioJpPageModule {}
