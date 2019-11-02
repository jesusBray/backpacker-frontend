import { TestBed } from '@angular/core/testing';

import { AdmService } from './adm.service';

describe('AdmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmService = TestBed.get(AdmService);
    expect(service).toBeTruthy();
  });
});
