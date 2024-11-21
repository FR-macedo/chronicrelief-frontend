import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <form (ngSubmit)="onSubmit()">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input
            type="email"
            [(ngModel)]="email"
            name="email"
            required
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Senha</ion-label>
          <ion-input
            type="password"
            [(ngModel)]="senha"
            name="senha"
            required
          ></ion-input>
        </ion-item>

        <ion-button expand="block" type="submit" class="ion-margin-top">
          Entrar
        </ion-button>

        <ion-button 
          expand="block" 
          fill="clear" 
          [routerLink]="['/register']"
          class="ion-margin-top"
        >
          Criar conta
        </ion-button>
      </form>
    </ion-content>
  `
})
export class LoginPage {
  email: string = '';
  senha: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async onSubmit() {
    try {
      const response = await this.authService.login({
        email: this.email,
        senha: this.senha
      }).toPromise();

      if (response?.token) {
        // Salvar o token no localStorage
        localStorage.setItem('authToken', response.token);
        
        // Redirecionar para a página principal
        this.router.navigate(['/home']);
        
        const toast = await this.toastController.create({
          message: 'Login realizado com sucesso!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      }
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Erro ao fazer login. Verifique suas credenciais.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}