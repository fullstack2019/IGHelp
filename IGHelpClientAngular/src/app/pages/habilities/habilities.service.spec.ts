import { TestBed } from '@angular/core/testing';

import { HabilitiesService } from './habilities.service';

describe('HabilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HabilitiesService = TestBed.get(HabilitiesService);
    expect(service).toBeTruthy();
  });
});
