import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-documentos',
  template: `
    <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-title>Documentos</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-button expand="block" (click)="selecionarArquivo()">
          Selecionar Documento
        </ion-button>

        <input 
          type="file" 
          #fileInput 
          style="display: none" 
          (change)="onFileSelected($event)"
        >

        <ion-list>
          <ion-item-sliding *ngFor="let doc of documentos">
            <ion-item>
              <ion-label>
                <h2>{{ doc.filename }}</h2>
                <p>{{ doc.contentType }}</p>
              </ion-label>
            </ion-item>
            <ion-item-options>
              <ion-item-option color="primary" (click)="visualizarDocumento(doc._id)">
                <ion-icon name="eye-outline"></ion-icon>
                Visualizar
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
      </ion-content>
    </ion-content>
  `
})
export class DocumentosPage implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  documentos: any[] = [];

  constructor(
    private documentosService: DocumentosService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.listarDocumentos();
  }

  selecionarArquivo() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Data = e.target.result.split(',')[1];
        this.uploadDocumento({
          filename: file.name,
          contentType: file.type,
          base64Data: base64Data
        });
      };
      reader.readAsDataURL(file);
    }
  }

  uploadDocumento(documento: {
    filename: string, 
    contentType: string, 
    base64Data: string
  }) {
    this.documentosService.uploadDocumento(documento)
      .subscribe({
        next: () => {
          this.listarDocumentos();
        },
        error: (erro) => {
          this.mostrarAlerta('Erro ao fazer upload', erro.message);
        }
      });
  }

  listarDocumentos() {
    this.documentosService.listarDocumentos()
      .subscribe({
        next: (docs: any) => {
          this.documentos = docs;
        },
        error: (erro) => {
          this.mostrarAlerta('Erro', 'Não foi possível listar documentos');
        }
      });
  }

  visualizarDocumento(id: string) {
    this.documentosService.obterDocumento(id)
      .subscribe({
        next: (doc: any) => {
          // Implementar lógica de visualização 
          // Pode ser um modal ou download
          this.mostrarAlerta('Documento', doc.filename);
        }
      });
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
