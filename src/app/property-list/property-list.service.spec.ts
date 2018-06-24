import { TestBed, inject } from '@angular/core/testing';

import { PropertyListService } from './property-list.service';
import {HttpClientModule} from '@angular/common/http';

describe('PropertyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyListService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([PropertyListService], (service: PropertyListService) => {
    expect(service).toBeTruthy();
  }));
});
