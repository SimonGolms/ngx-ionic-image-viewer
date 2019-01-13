import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // Get a random image
  imgSource = 'https://picsum.photos/1000/1500/?random';

  constructor(public modalController: ModalController) {}

  async viewImage(src: string) {
    console.log('HomePage viewImage()', src);
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: { imgSource: src },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });
    return await modal.present();
  }
}
