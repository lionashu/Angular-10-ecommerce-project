import { TestBed } from '@angular/core/testing';

import { SiteFrameworkService } from './site-framework.service';

describe('SiteFrameworkService', () => {
  let service: SiteFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
