import { TestBed } from '@angular/core/testing';

import { ConsulteCepService } from './consulte-cep.service';

describe('ConsulteCepService', () => {
  let service: ConsulteCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulteCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
