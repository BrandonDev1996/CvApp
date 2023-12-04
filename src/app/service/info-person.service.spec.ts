import { TestBed } from '@angular/core/testing';

import { InfoPersonService } from './info-person.service';

describe('InfoPersonService', () => {
  let service: InfoPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
