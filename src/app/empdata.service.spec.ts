import { TestBed } from '@angular/core/testing';

import { EmpdataService } from './empdata.service';

describe('EmpdataService', () => {
  let service: EmpdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
