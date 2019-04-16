import { TestBed } from '@angular/core/testing';

import { ShoppingListServiceService } from './shopping-list-service.service';

describe('ShoppingListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListServiceService = TestBed.get(ShoppingListServiceService);
    expect(service).toBeTruthy();
  });
});
