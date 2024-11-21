import { TestBed } from '@angular/core/testing';

import { DoencasService } from './doencas.service';

describe('DoencasService', () => {
  let service: DoencasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoencasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
