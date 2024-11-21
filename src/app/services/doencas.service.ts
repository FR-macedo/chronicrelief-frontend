import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doenca } from '../models/doenca.model';

@Injectable({
  providedIn: 'root',
})
export class DoencasService {
  private apiUrl = 'http://localhost:3100/api/doencas';

  constructor(private http: HttpClient) {}

  listarDoencas(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(this.apiUrl);
  }

  criarDoenca(doencaData: Partial<Doenca>): Observable<Doenca> {
    return this.http.post<Doenca>(this.apiUrl, doencaData);
  }

  atualizarDoenca(id: string, doencaData: Partial<Doenca>): Observable<Doenca> {
    return this.http.put<Doenca>(`${this.apiUrl}/${id}`, doencaData);
  }

  deletarDoenca(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
