import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoencasPageRoutingModule } from './doencas-routing.module';

import { DoencasPage } from './doencas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoencasPageRoutingModule
  ],
  declarations: [DoencasPage]
})
export class DoencasPageModule {}
