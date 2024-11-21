import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


// Pages (importações de todas as suas páginas)
import { HomePage } from './pages/home/home.page';
import { RegisterPage } from './pages/register/register.page';
import { DoencasPage } from './pages/doencas/doencas.page';
import { DocumentosPage } from './pages/documentos/documentos.page';
import { MedicacoesPage } from './pages/medicacoes/medicacoes.page';
import { FormularioMSPage } from './pages/formulario-ms/formulario-ms.page';
// import { FormularioPSPage } from './pages/formulario-ps/formulario-ps.page';
// import { FormularioJPPage } from './pages/formulario-jp/formulario-jp.page';
import { LoginPage } from './pages/login/login.page';



// Services (importações de todos os seus serviços)
import { AuthService } from './services/auth.service';
import { DoencasService } from './services/doencas.service';
import { DocumentosService } from './services/documentos.service';
import { MedicacoesService } from './services/medicacoes.service';
import { FormularioMSService } from './services/formulario-ms.service';
// import { FormularioPSService } from './services/formulario-ps.service';
// import { FormularioJPService } from './services/formulario-jp.service';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    // AppComponent,
    // HomePage,
    // RegisterPage,
    // DoencasPage,
    // DocumentosPage,
    // MedicacoesPage,
    // FormularioMSPage,
    // FormularioPSPage,
    // FormularioJPPage,
    LoginPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    DoencasService,
    DocumentosService,
    MedicacoesService,
    FormularioMSService,
    // FormularioPSService,
    // FormularioJPService,
    HomeService,
   // Adicione outros providers se necessário
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}