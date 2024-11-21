import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'doencas',
    loadChildren: () => import('./pages/doencas/doencas.module').then( m => m.DoencasPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then( m => m.DocumentosPageModule)
  },
  {
    path: 'medicacoes',
    loadChildren: () => import('./pages/medicacoes/medicacoes.module').then( m => m.MedicacoesPageModule)
  },
  {
    path: 'formulario-ms',
    loadChildren: () => import('./pages/formulario-ms/formulario-ms.module').then( m => m.FormularioMsPageModule)
  },
  {
    path: 'formulario-ps',
    loadChildren: () => import('./pages/formulario-ps/formulario-ps.module').then( m => m.FormularioPsPageModule)
  },
  {
    path: 'formulario-jp',
    loadChildren: () => import('./pages/formulario-jp/formulario-jp.module').then( m => m.FormularioJpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
