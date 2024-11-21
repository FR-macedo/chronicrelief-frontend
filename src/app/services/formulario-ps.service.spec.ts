import { TestBed } from '@angular/core/testing';

import { FormularioPsService } from './formulario-ps.service';

describe('FormularioPsService', () => {
  let service: FormularioPsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioPsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
