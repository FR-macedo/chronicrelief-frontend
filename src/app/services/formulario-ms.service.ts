import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioMSService {
  private apiUrl = 'http://localhost:3100/diario';
  
  constructor(private http: HttpClient) {}

  criarRegistroDiario(registro: any) {
    return this.http.post(`${this.apiUrl}/create`, registro);
  }

  listarRegistrosDiarios() {
    return this.http.get(this.apiUrl);
  }
}