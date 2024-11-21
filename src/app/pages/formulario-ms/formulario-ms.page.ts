import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormularioMSService } from 'src/app/services/formulario-ms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-ms',
  template: `
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Registro Diário MS</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Novo Registro Diário</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <form (ngSubmit)="criarRegistroDiario()">
              <ion-datetime 
                [(ngModel)]="novoRegistro.data" 
                name="data" 
                label="Data"
              ></ion-datetime>
              
              <ion-textarea 
                [(ngModel)]="novoRegistro.sintomas" 
                name="sintomas" 
                label="Sintomas"
              ></ion-textarea>
              
              <ion-input 
                [(ngModel)]="medicacao" 
                name="medicacao" 
                label="Medicação"
              ></ion-input>
              <ion-button (click)="adicionarMedicacao()">
                Adicionar Medicação
              </ion-button>
              
              <ion-textarea 
                [(ngModel)]="novoRegistro.observacoes" 
                name="observacoes" 
                label="Observações"
              ></ion-textarea>
              
              <ion-button type="submit">Salvar Registro</ion-button>
            </form>
          </ion-card-content>
        </ion-card>

        <ion-list>
          <ion-item *ngFor="let registro of registrosDiarios">
            <ion-label>
              <h2>{{ registro.data | date }}</h2>
              <p>Sintomas: {{ registro.sintomas }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-content>
  `
})
export class FormularioMSPage implements OnInit {
  novoRegistro = {
    data: new Date().toISOString(),
    sintomas: '',
    medicacoes: [] as string[],
    observacoes: ''
  };

  medicacao = '';
  registrosDiarios: any[] = [];

  constructor(
    private formularioMSService: FormularioMSService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.listarRegistrosDiarios();
  }

  adicionarMedicacao() {
    if (this.medicacao) {
      this.novoRegistro.medicacoes.push(this.medicacao);
      this.medicacao = '';
    }
  }

  criarRegistroDiario() {
    this.formularioMSService.criarRegistroDiario(this.novoRegistro)
      .subscribe({
        next: () => {
          this.listarRegistrosDiarios();
          this.limparFormulario();
        },
        error: (erro) => {
          this.mostrarAlerta('Erro', erro.message);
        }
      });
  }

  listarRegistrosDiarios() {
    this.formularioMSService.listarRegistrosDiarios()
      .subscribe({
        next: (registros: any) => {
          this.registrosDiarios = registros;
        }
      });
  }

  limparFormulario() {
    this.novoRegistro = {
      data: new Date().toISOString(),
      sintomas: '',
      medicacoes: [],
      observacoes: ''
    };
    this.medicacao = '';
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