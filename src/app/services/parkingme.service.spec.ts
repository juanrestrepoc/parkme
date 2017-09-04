import { TestBed, inject } from '@angular/core/testing';

import { ParkingmeService } from './parkingme.service';

describe('ParkingmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingmeService]
    });
  });

  it('should be created', inject([ParkingmeService], (service: ParkingmeService) => {
    expect(service).toBeTruthy();
  }));
});
