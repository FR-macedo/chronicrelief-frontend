import { TestBed } from '@angular/core/testing';

import { FormularioMsService } from './formulario-ms.service';

describe('FormularioMsService', () => {
  let service: FormularioMsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioMsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
