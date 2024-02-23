import { TestBed } from '@angular/core/testing';

import { ExplotacionService } from './explotacion.service';

describe('ExplotacionService', () => {
  let service: ExplotacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplotacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
