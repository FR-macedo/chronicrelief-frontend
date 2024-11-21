import { Component, OnInit } from '@angular/core';
import { DoencasService } from 'src/app/services/doencas.service';

@Component({
  selector: 'app-doencas',
  template: `
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let doenca of doencas">
          {{ doenca.nome }}
          <ion-button (click)="deletarDoenca(doenca._id)">Deletar</ion-button>
        </ion-item>
      </ion-list>
      
      <ion-card>
        <ion-card-header>
          <ion-card-title>Nova Doença</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form (ngSubmit)="criarDoenca()">
            <ion-input 
              [(ngModel)]="novaDoenca.nome" 
              name="nome" 
              label="Nome da Doença"
            ></ion-input>
            <ion-input 
              [(ngModel)]="novaDoenca.sintomas" 
              name="sintomas" 
              label="Sintomas"
            ></ion-input>
            <ion-datetime 
              [(ngModel)]="novaDoenca.dataDiagnostico" 
              name="dataDiagnostico" 
              label="Data do Diagnóstico"
            ></ion-datetime>
            <ion-button type="submit">Adicionar Doença</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class DoencasPage implements OnInit {
  doencas: any[] = [];
  novaDoenca = {
    nome: '',
    sintomas: [] as string[], // Define sintomas como um array vazio
    dataDiagnostico: new Date().toISOString(),
  };

  constructor(private doencasService: DoencasService) {}

  ngOnInit() {
    this.listarDoencas();
  }

  listarDoencas() {
    this.doencasService.listarDoencas().subscribe({
      next: (doencas: any) => {
        this.doencas = doencas;
      }
    });
  }

  criarDoenca() {
    this.doencasService.criarDoenca(this.novaDoenca).subscribe({
      next: () => {
        this.listarDoencas();
        // Limpa o formulário
        this.novaDoenca = {
          nome: '',
          sintomas: [],
          dataDiagnostico: new Date().toISOString(),
        };
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deletarDoenca(id: string) {
    this.doencasService.deletarDoenca(id).subscribe({
      next: () => {
        this.listarDoencas();
      }
    });
  }
}