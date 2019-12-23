import { ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxIonicImageViewerDirective } from './ngx-ionic-image-viewer.directive';

describe('NgxIonicImageViewerDirective', () => {
  const el: ElementRef = null;
  const modalController: ModalController = null;

  it('should create an instance', () => {
    const directive = new NgxIonicImageViewerDirective(el, modalController);
    expect(directive).toBeTruthy();
  });
});
