import { Directive, ElementRef, HostListener, Input, Renderer2, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@Directive({
  selector: '[ionImgViewer]'
})
export class NgxIonicImageViewerDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2, public modalController: ModalController) {}

  @Input() cssClass?: string | string[];
  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src: string;
  @Input() srcFallback?: string;
  @Input() srcHighRes?: string;
  @Input() swipeToClose?: boolean;
  @Input() text?: string;
  @Input() title?: string;

  @HostListener('click') onClick() {
    this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.text, this.scheme, this.slideOptions, this.swipeToClose);
  }

  @HostListener('error', ['$event']) onError(error) {
    if (this.src !== this.el.nativeElement.src) {
      this.src = this.el.nativeElement.src;
    }
    if (this.srcFallback) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
    }
  }

  ngOnInit() {
    if (!this.el.nativeElement.hasAttribute('src')) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
    }
  }

  async viewImage(
    src: string,
    srcFallback: string = '',
    srcHighRes: string = '',
    title: string = '',
    text: string = '',
    scheme: string = 'auto',
    slideOptions: object = {},
    swipeToClose: boolean = true
  ) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src,
        srcFallback,
        srcHighRes,
        title,
        text,
        scheme,
        slideOptions,
        swipeToClose
      },
      cssClass: this.cssClass instanceof Array ? ['ion-img-viewer', ...this.cssClass] : ['ion-img-viewer', this.cssClass],
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
