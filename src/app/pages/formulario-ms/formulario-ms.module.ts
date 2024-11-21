import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioMsPageRoutingModule } from './formulario-ms-routing.module';
import { FormularioMSPage } from './formulario-ms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioMsPageRoutingModule
  ],
  declarations: [FormularioMSPage]
})
export class FormularioMsPageModule { }