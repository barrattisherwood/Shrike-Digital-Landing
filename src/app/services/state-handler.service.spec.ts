import { TestBed, inject } from '@angular/core/testing';

import { StateHandlerService } from './state-handler.service';

describe('StateHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateHandlerService]
    });
  });

  it('should be created', inject([StateHandlerService], (service: StateHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
