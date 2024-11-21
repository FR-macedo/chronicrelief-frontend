import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3100/users';

  constructor(private http: HttpClient) {}

  register(userData: { nome: string; email: string; senha: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  login(credentials: { email: string; senha: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
  }

  isAuthenticated(): boolean {
    // Exemplo básico para verificar a existência de um token
    return !!localStorage.getItem('authToken');
  }
}
