import { Component, OnInit } from '@angular/core';
import { IonToggle, ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  prefersDark = false;

  imgUrl = `https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?&q=80`;

  imgAvatar = {
    id: 237,
    src: 'https://picsum.photos/id/237/200/200.jpg',
    srcHighRes: 'https://picsum.photos/id/237/3500/2095.jpg',
    author: 'André Spieker',
  };
  imgThumbnail = {
    id: 1040,
    src: 'https://picsum.photos/id/1040/200/200.jpg',
    srcHighRes: 'https://picsum.photos/id/1040/4496/3000.jpg',
    author: 'Rachel Davis',
  };

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.toggleTheme();
    }
  }

  toggleTheme() {
    this.prefersDark = !this.prefersDark;
    document.body.classList.toggle('dark', this.prefersDark);
  }

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.imgUrl, // required
        title: 'Silhoutte (Programmatic)', // optional
        text: 'Photo by Mayur Gala on Unsplash', // optional
      },
      cssClass: 'ion-img-viewer', // required
      keyboardClose: true,
      showBackdrop: true,
    });

    return await modal.present();
  }
}
