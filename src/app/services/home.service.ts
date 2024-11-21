import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Doenca } from '../models/doenca.model';
import { Medicacao } from '../models/medicacao.model';
import { Documento } from '../models/documento.model';
import { RegistroDiario } from '../models/registro-diario.model';
import { DoencasService } from './doencas.service';
import { MedicacoesService } from './medicacoes.service';
import { DocumentosService } from './documentos.service';
import { FormularioMSService } from './formulario-ms.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private doencasService: DoencasService,
    private medicacoesService: MedicacoesService,
    private documentosService: DocumentosService,
    private formularioMSService: FormularioMSService
  ) {}

  getHomeData(limit: number = 5): Observable<{
    doencas: Doenca[];
    medicacoes: Medicacao[];
    documentos: Documento[];
    registrosDiarios: RegistroDiario[];
  }> {
    const doencas$ = this.doencasService.listarDoencas() as Observable<Doenca[]>;
    const medicacoes$ = this.medicacoesService.listarMedicacoes() as Observable<Medicacao[]>;
    const documentos$ = this.documentosService.listarDocumentos() as Observable<Documento[]>;
    const registrosDiarios$ = this.formularioMSService.listarRegistrosDiarios() as Observable<RegistroDiario[]>;

    return forkJoin({
      doencas: doencas$,
      medicacoes: medicacoes$,
      documentos: documentos$,
      registrosDiarios: registrosDiarios$,
    }).pipe(
      map(data => ({
        doencas: this.processData(data.doencas, limit),
        medicacoes: this.processData(data.medicacoes, limit),
        documentos: this.processData(data.documentos, limit),
        registrosDiarios: this.processData(data.registrosDiarios, limit),
      }))
    );
  }

  private processData<T>(data: T[], limit: number): T[] {
    return data.sort((a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ).slice(0, limit);
  }
}
