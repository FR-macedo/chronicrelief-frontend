import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentosService {
  private apiUrl = 'http://localhost:3100/documentos';

  constructor(private http: HttpClient) {}

  listarDocumentos(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.apiUrl);
  }

  uploadDocumento(documento: Partial<Documento>): Observable<Documento> {
    return this.http.post<Documento>(`${this.apiUrl}/upload`, documento);
  }

  obterDocumento(id: string): Observable<Documento> {
    return this.http.get<Documento>(`${this.apiUrl}/${id}`);
  }

  deletarDocumento(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
