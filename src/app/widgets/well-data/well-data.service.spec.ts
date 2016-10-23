/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WellDataService } from './well-data.service';

describe('Service: WellData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WellDataService]
    });
  });

  it('should ...', inject([WellDataService], (service: WellDataService) => {
    expect(service).toBeTruthy();
  }));
});
