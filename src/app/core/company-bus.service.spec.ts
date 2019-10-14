import { TestBed } from '@angular/core/testing';

import { CompanyBusService } from './company-bus.service';

describe('CompanyBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyBusService = TestBed.get(CompanyBusService);
    expect(service).toBeTruthy();
  });
});
