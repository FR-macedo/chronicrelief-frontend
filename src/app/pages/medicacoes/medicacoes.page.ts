import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MedicacoesService } from 'src/app/services/medicacoes.service';

@Component({
  selector: 'app-medicacoes',
  template: `
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Medicações</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Nova Medicação</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <form (ngSubmit)="criarMedicacao()">
              <ion-input 
                [(ngModel)]="novaMedicacao.nome" 
                name="nome" 
                label="Nome da Medicação"
              ></ion-input>
              
              <ion-input 
                [(ngModel)]="novaMedicacao.dosagem" 
                name="dosagem" 
                label="Dosagem"
              ></ion-input>
              
              <ion-input 
                [(ngModel)]="novaMedicacao.frequencia" 
                name="frequencia" 
                label="Frequência"
              ></ion-input>
              
              <ion-datetime 
                [(ngModel)]="novaMedicacao.horarioAlarme" 
                name="horarioAlarme" 
                label="Horário do Alarme"
              ></ion-datetime>
              
              <ion-datetime 
                [(ngModel)]="novaMedicacao.dataInicio" 
                name="dataInicio" 
                label="Data de Início"
              ></ion-datetime>
              
              <ion-datetime 
                [(ngModel)]="novaMedicacao.dataFim" 
                name="dataFim" 
                label="Data de Término"
              ></ion-datetime>
              
              <ion-button type="submit">Adicionar Medicação</ion-button>
            </form>
          </ion-card-content>
        </ion-card>

        <ion-list>
          <ion-item *ngFor="let medicacao of medicacoes">
            <ion-label>
              <h2>{{ medicacao.nome }}</h2>
              <p>Dosagem: {{ medicacao.dosagem }}</p>
              <p>Horário: {{ medicacao.horarioAlarme }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-content>
  `
})
export class MedicacoesPage implements OnInit {
  novaMedicacao = {
    nome: '',
    dosagem: '',
    frequencia: '',
    horarioAlarme: new Date().toISOString(),
    dataInicio: new Date().toISOString(),
    dataFim: new Date().toISOString(),
    recorrencia: {
      tipo: 'semanal',
      intervalos: 1,
      diasDaSemana: ['segunda', 'quarta', 'sexta']
    }
  };

  medicacoes: any[] = [];

  constructor(
    private medicacoesService: MedicacoesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.listarMedicacoes();
  }

  criarMedicacao() {
    this.medicacoesService.criarMedicacao(this.novaMedicacao)
      .subscribe({
        next: () => {
          this.listarMedicacoes();
          this.limparFormulario();
        },
        error: (erro) => {
          this.mostrarAlerta('Erro', erro.message);
        }
      });
  }

  listarMedicacoes() {
    this.medicacoesService.listarMedicacoes()
      .subscribe({
        next: (medicacoes: any) => {
          this.medicacoes = medicacoes;
        },
        error: (erro) => {
          this.mostrarAlerta('Erro', 'Não foi possível listar medicações');
        }
      });
  }

  limparFormulario() {
    this.novaMedicacao = {
      nome: '',
      dosagem: '',
      frequencia: '',
      horarioAlarme: new Date().toISOString(),
      dataInicio: new Date().toISOString(),
      dataFim: new Date().toISOString(),
      recorrencia: {
        tipo: 'semanal',
        intervalos: 1,
        diasDaSemana: ['segunda', 'quarta', 'sexta']
      }
    };
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }
}
