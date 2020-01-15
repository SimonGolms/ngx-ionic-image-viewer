import { ElementRef, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxIonicImageViewerDirective } from './ngx-ionic-image-viewer.directive';

describe('NgxIonicImageViewerDirective', () => {
  const el: ElementRef = null;
  const renderer: Renderer2 = null;
  const modalController: ModalController = null;

  it('should create an instance', () => {
    const directive = new NgxIonicImageViewerDirective(el, renderer, modalController);
    expect(directive).toBeTruthy();
  });
});
