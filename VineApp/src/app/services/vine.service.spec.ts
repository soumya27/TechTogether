import { TestBed } from '@angular/core/testing';

import { VineService } from './vine.service';

describe('VineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VineService = TestBed.get(VineService);
    expect(service).toBeTruthy();
  });
});
