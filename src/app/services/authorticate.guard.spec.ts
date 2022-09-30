import { TestBed } from '@angular/core/testing';

import { AuthorticateGuard } from './authorticate.guard';

describe('AuthorticateGuard', () => {
  let guard: AuthorticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
