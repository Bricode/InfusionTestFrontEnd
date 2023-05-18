import { TestBed } from '@angular/core/testing';

import { LoginAuthenticatorService } from './login-authenticator.service';

describe('LoginAuthenticatorService', () => {
  let service: LoginAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
