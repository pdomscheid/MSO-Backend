import { TestBed } from '@angular/core/testing';

import { SaidService } from './said.service';

describe('SaidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaidService = TestBed.get(SaidService);
    expect(service).toBeTruthy();
  });
});
