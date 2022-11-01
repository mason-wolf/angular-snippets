import { TestBed } from '@angular/core/testing';

import { AdminPageGuardServiceService } from './admin-page-guard-service.service';

describe('AdminPageGuardServiceService', () => {
  let service: AdminPageGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPageGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
