export interface Documento {
    id: string;
    filename: string;
    contentType: string; // Ex: "application/pdf"
    base64Data?: string; // Opcional, usado para upload
    createdAt: string; // ISO string
  }
  