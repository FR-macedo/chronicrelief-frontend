import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DocumentosService } from './services/documentos.service';
import { DoencasService } from './services/doencas.service';
import { FormularioMSService } from './services/formulario-ms.service';
import { HomeService } from './services/home.service';
import { MedicacoesService } from './services/medicacoes.service';

@NgModule({
  declarations: [
    AppComponent,
    // Remova todas as outras declarações de páginas daqui,
    // pois elas serão carregadas via lazy loading
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    DoencasService,
    DocumentosService,
    MedicacoesService,
    FormularioMSService,
    HomeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}