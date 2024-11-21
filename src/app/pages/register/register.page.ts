import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  template: `
    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Registro</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form (ngSubmit)="onSubmit()">
            <ion-input 
              [(ngModel)]="nome" 
              name="nome" 
              label="Nome" 
              placeholder="Seu nome"
            ></ion-input>
            <ion-input 
              [(ngModel)]="email" 
              name="email" 
              type="email" 
              label="Email" 
              placeholder="seu@email.com"
            ></ion-input>
            <ion-input 
              [(ngModel)]="senha" 
              name="senha" 
              type="password" 
              label="Senha"
            ></ion-input>
            <ion-button expand="block" type="submit">Registrar</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class RegisterPage {
  nome: string = '';
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register({
      nome: this.nome, 
      email: this.email, 
      senha: this.senha
    }).subscribe({
      next: (response) => {
        // Tratar sucesso do registro
      },
      error: (error) => {
        // Tratar erro de registro
      }
    });
  }
}
