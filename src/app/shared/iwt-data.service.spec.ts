/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IwtDataService } from './iwt-data.service';

describe('Service: IwtData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IwtDataService]
    });
  });

  it('should ...', inject([IwtDataService], (service: IwtDataService) => {
    expect(service).toBeTruthy();
  }));
});
