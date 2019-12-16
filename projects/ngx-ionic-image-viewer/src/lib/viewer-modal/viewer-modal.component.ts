import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'ion-viewer-modal',
  templateUrl: './viewer-modal.component.html',
  styleUrls: ['./viewer-modal.component.scss']
})
export class ViewerModalComponent implements OnInit {
  @Input() src: string;
  @Input() alt?: string;
  @Input() title?: string;
  @Input() text?: string;

  @Input() slideOptions?: object;

  defaultSlideOptions = {
    centeredSlides: 'true',
    zoom: {
      enabled: true
    }
  };

  options = {};

  @ViewChild('sliderRef', { static: true }) slides: IonSlides;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.options = { ...this.defaultSlideOptions, ...this.slideOptions };
    this.slides.update();
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
