import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicacao } from '../models/medicacao.model';

@Injectable({
  providedIn: 'root',
})
export class MedicacoesService {
  private apiUrl = 'http://localhost:3100/medicacoes';

  constructor(private http: HttpClient) {}

  listarMedicacoes(): Observable<Medicacao[]> {
    return this.http.get<Medicacao[]>(this.apiUrl);
  }

  criarMedicacao(medicacao: Partial<Medicacao>): Observable<Medicacao> {
    return this.http.post<Medicacao>(this.apiUrl, medicacao);
  }

  atualizarMedicacao(id: string, medicacao: Partial<Medicacao>): Observable<Medicacao> {
    return this.http.put<Medicacao>(`${this.apiUrl}/${id}`, medicacao);
  }

  deletarMedicacao(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
