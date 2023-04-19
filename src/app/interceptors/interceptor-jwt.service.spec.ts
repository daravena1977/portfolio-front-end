import { TestBed } from '@angular/core/testing';

import { InterceptorJwtService } from './interceptor-jwt.service';

describe('InterceptorJwtService', () => {
  let service: InterceptorJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
