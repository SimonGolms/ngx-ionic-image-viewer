import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIonicImageViewerComponent } from './ngx-ionic-image-viewer.component';

describe('NgxIonicImageViewerComponent', () => {
  let component: NgxIonicImageViewerComponent;
  let fixture: ComponentFixture<NgxIonicImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIonicImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIonicImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
