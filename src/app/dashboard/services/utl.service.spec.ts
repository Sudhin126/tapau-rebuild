import { TestBed } from '@angular/core/testing';

import { UtlService } from './utl.service';

describe('UtlService', () => {
  let service: UtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
