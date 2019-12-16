// tslint:disable-next-line

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@Component({
  selector: 'ion-img-viewer',
  templateUrl: './ngx-ionic-image-viewer.component.html',
  styles: [
    `
      .modal-fullscreen {
        --border-radius: 0;
        border-radius: 0;
      }
      .modal-fullscreen .modal-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxIonicImageViewerComponent implements OnInit {
  @Input() src: string;
  @Input() alt?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() slideOptions?: object;

  constructor(public modalController: ModalController) {}

  async viewImage(src: string, title: string = '', text: string = '', slideOptions: object = {}) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src,
        title,
        text,
        slideOptions
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  ngOnInit() {}
}
