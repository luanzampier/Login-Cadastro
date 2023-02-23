import { TestBed } from '@angular/core/testing';

import { RecordTableService } from './record-table.service';

describe('RecordTableService', () => {
  let service: RecordTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
