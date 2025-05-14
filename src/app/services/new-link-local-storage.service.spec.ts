import { TestBed } from '@angular/core/testing';

import { NewLinkLocalStorageService } from './new-link-local-storage.service';

describe('NewLinkLocalStorageService', () => {
  let service: NewLinkLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLinkLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
