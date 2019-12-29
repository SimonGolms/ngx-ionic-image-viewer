import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@Directive({
  selector: '[ionImgViewer]'
})
export class NgxIonicImageViewerDirective {
  constructor(private el: ElementRef, public modalController: ModalController) {}

  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src: string;
  @Input() srcHighRes?: string;
  @Input() text?: string;
  @Input() title?: string;

  @HostListener('click') onClick() {
    this.viewImage(this.src, this.srcHighRes, this.title, this.text, this.scheme, this.slideOptions);
  }

  async viewImage(
    src: string,
    srcHighRes: string = '',
    title: string = '',
    text: string = '',
    scheme: string = 'auto',
    slideOptions: object = {}
  ) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src,
        srcHighRes,
        title,
        text,
        scheme,
        slideOptions
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
