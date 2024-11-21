import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Chronic Relief
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Resumo Rápido -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Resumo</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <div class="stat-box">
                  <h3>{{ totalMedicacoes }}</h3>
                  <p>Medicações</p>
                </div>
              </ion-col>
              <ion-col size="4">
                <div class="stat-box">
                  <h3>{{ totalDoencas }}</h3>
                  <p>Doenças</p>
                </div>
              </ion-col>
              <ion-col size="4">
                <div class="stat-box">
                  <h3>{{ totalDocumentos }}</h3>
                  <p>Documentos</p>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <!-- Medicações -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Medicações Recentes
            <ion-button fill="clear" size="small" routerLink="/medicacoes">
              Ver Todas
              <ion-icon name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item *ngFor="let medicacao of medicacoes">
              <ion-label>
                <h2>{{ medicacao.nome }}</h2>
                <p>{{ medicacao.dosagem }} - {{ medicacao.horarioAlarme | date:'shortTime' }}</p>
              </ion-label>
              <ion-note slot="end" color="primary">
                {{ medicacao.createdAt | date }}
              </ion-note>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <!-- Doenças -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Doenças
            <ion-button fill="clear" size="small" routerLink="/doencas">
              Ver Todas
              <ion-icon name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item *ngFor="let doenca of doencas">
              <ion-label>
                <h2>{{ doenca.nome }}</h2>
                <p>Diagnosticado em: {{ doenca.dataDiagnostico | date }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <!-- Registros Diários -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Registros Diários Recentes
            <ion-button fill="clear" size="small" routerLink="/diario">
              Ver Todos
              <ion-icon name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item *ngFor="let registro of registrosDiarios">
              <ion-label>
                <h2>{{ registro.data | date }}</h2>
                <p>{{ registro.sintomas }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <!-- Documentos -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Documentos Recentes
            <ion-button fill="clear" size="small" routerLink="/documentos">
              Ver Todos
              <ion-icon name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item *ngFor="let documento of documentos">
              <ion-label>
                <h2>{{ documento.filename }}</h2>
                <p>{{ documento.contentType }}</p>
              </ion-label>
              <ion-note slot="end" color="primary">
                {{ documento.createdAt | date }}
              </ion-note>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>

      <!-- FAB para Adicionar -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button (click)="navegarPara('/medicacoes/nova')">
            <ion-icon name="medkit"></ion-icon>
          </ion-fab-button>
          <ion-fab-button (click)="navegarPara('/doencas/nova')">
            <ion-icon name="fitness"></ion-icon>
          </ion-fab-button>
          <ion-fab-button (click)="navegarPara('/documentos/upload')">
            <ion-icon name="document"></ion-icon>
          </ion-fab-button>
          <ion-fab-button (click)="navegarPara('/diario/novo')">
            <ion-icon name="calendar"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  `,
  styles: [`
    .stat-box {
      text-align: center;
      padding: 10px;
      border-radius: 8px;
      background: var(--ion-color-light);
    }
    
    .stat-box h3 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      color: var(--ion-color-primary);
    }
    
    .stat-box p {
      margin: 5px 0 0;
      font-size: 14px;
      color: var(--ion-color-medium);
    }
  `]
})
export class HomePage implements OnInit {
  medicacoes: any[] = [];
  doencas: any[] = [];
  documentos: any[] = [];
  registrosDiarios: any[] = [];
  registrosSemanais: any[] = [];
  registrosMensais: any[] = [];
  
  totalMedicacoes = 0;
  totalDoencas = 0;
  totalDocumentos = 0;

  itemLimit = 5; // Limite de itens por seção

  constructor(
    private homeService: HomeService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.carregarDados();
  }

  async carregarDados() {
    (await this.homeService.getHomeData(this.itemLimit))
      .subscribe({
        next: (data: any) => {
          this.medicacoes = data.medicacoes;
          this.doencas = data.doencas;
          this.documentos = data.documentos;
          this.registrosDiarios = data.registrosDiarios;
          this.registrosSemanais = data.registrosSemanais;
          this.registrosMensais = data.registrosMensais;

          // Atualiza totais
          this.totalMedicacoes = this.medicacoes.length;
          this.totalDoencas = this.doencas.length;
          this.totalDocumentos = this.documentos.length;
        },
        error: (error) => {
          console.error('Erro ao carregar dados:', error);
        }
      });
  }

  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }


  doRefresh(event: any) {
    this.carregarDados();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }
}