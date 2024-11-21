export interface RegistroDiario {
    _id: string;
    data: string; // ISO string
    sintomas: string;
    medicacoes: string[]; // Array de IDs de medicações ou nomes
    observacoes?: string; // Opcional
  }
  