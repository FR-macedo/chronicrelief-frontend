import { TestBed } from '@angular/core/testing';

import { MedicacoesService } from './medicacoes.service';

describe('MedicacoesService', () => {
  let service: MedicacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
