import { TestBed } from '@angular/core/testing';

import { DeliciousMenuService } from './delicious-menu-service';

describe('DeliciousMenuService', () => {
  let service: DeliciousMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliciousMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
