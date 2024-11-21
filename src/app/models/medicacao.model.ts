export interface Medicacao {
    id: string;
    nome: string;
    dosagem: string; // Ex: "500mg"
    frequencia: string; // Ex: "2 vezes ao dia"
    horarioAlarme: string; // ISO string
    dataInicio: string; // ISO string
    dataFim: string; // ISO string
    recorrencia: {
      tipo: string; // Ex: "semanal"
      intervalos: number;
      diasDaSemana: string[]; // Ex: ["segunda", "quarta", "sexta"]
    };
  }
  