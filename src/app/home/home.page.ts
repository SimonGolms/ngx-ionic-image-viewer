import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../component/image-viewer/image-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  imgSource = './assets/silhoutte.jpg';
  imgTitle = 'Silhoutte';
  imgDescription = 'Photo by Mayur Gala on Unsplash';

  constructor(public modalController: ModalController) {}

  async viewImage(src: string, title: string = '', description: string = '') {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imgSource: src,
        imgTitle: title,
        imgDescription: description
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
