/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GridsService } from './grids.service';

describe('Service: Grids', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridsService]
    });
  });

  it('should ...', inject([GridsService], (service: GridsService) => {
    expect(service).toBeTruthy();
  }));
});
