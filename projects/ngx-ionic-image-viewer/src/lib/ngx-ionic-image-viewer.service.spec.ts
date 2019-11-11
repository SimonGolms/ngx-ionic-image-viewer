import { TestBed } from '@angular/core/testing';

import { NgxIonicImageViewerService } from './ngx-ionic-image-viewer.service';

describe('NgxIonicImageViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxIonicImageViewerService = TestBed.get(NgxIonicImageViewerService);
    expect(service).toBeTruthy();
  });
});
