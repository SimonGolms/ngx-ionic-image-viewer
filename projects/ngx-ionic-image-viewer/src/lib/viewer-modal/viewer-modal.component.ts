import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'ion-viewer-modal',
  templateUrl: './viewer-modal.component.html',
  styleUrls: ['./viewer-modal.component.scss']
})
export class ViewerModalComponent implements OnInit {
  @Input() alt?: string;
  @Input() scheme?: string;
  @Input() slideOptions?: object;
  @Input() src: string;
  @Input() srcFallback?: string;
  @Input() srcHighRes?: string;
  @Input() swipeToClose?: boolean;
  @Input() text?: string;
  @Input() title?: string;

  defaultSlideOptions = {
    centeredSlides: true,
    passiveListeners: false,
    zoom: {
      enabled: true
    }
  };

  options = {};

  swipeState = {
    phase: 'init',
    direction: 'none',
    swipeType: 'none',
    startX: 0,
    startY: 0,
    distance: 0,
    distanceX: 0,
    distanceY: 0,
    threshold: 150, // required min distance traveled to be considered swipe
    restraint: 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime: 500, // maximum time allowed to travel that distance
    elapsedTime: 0,
    startTime: 0
  };

  @ViewChild('sliderRef', { static: true }) slides: IonSlides;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.options = { ...this.defaultSlideOptions, ...this.slideOptions };
    this.src = this.srcHighRes || this.src;
    this.setStyle();
    this.setScheme(this.scheme);
    this.initSwipeToClose(this.swipeToClose);
  }

  setStyle() {
    const el: HTMLElement = document.querySelector('.modal-fullscreen');
    el.style.setProperty('--height', '100%');
    el.style.setProperty('--width', '100%');
    el.style.setProperty('--border-radius', '0');
  }

  setScheme(scheme: string) {
    if (scheme === 'auto') {
      return;
    }

    const el: HTMLElement = document.querySelector('.modal-fullscreen');

    if (this.scheme === 'light') {
      el.style.setProperty('--ion-background-color', '#ffffff');
      el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
      el.style.setProperty('--ion-text-color', '#000');
      el.style.setProperty('--ion-text-color-rgb', '0,0,0');
    }

    if (this.scheme === 'dark') {
      if (el.classList.contains('ios')) {
        el.style.setProperty('--ion-background-color', '#000000');
        el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
      } else {
        el.style.setProperty('--ion-background-color', '#121212');
        el.style.setProperty('--ion-background-color-rgb', '18,18,18');
      }
      el.style.setProperty('--ion-text-color', '#ffffff');
      el.style.setProperty('--ion-text-color-rgb', '255,255,255');
    }
  }

  /**
   * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
   */
  initSwipeToClose(isActive: boolean = true) {
    if (!isActive) {
      return;
    }

    const el = document.querySelector('ion-modal');
    el.addEventListener('mousedown', event => this.swipeStart(event), true);
    el.addEventListener('mousemove', event => this.swipeMove(event), true);
    el.addEventListener('mouseup', event => this.swipeEnd(event), true);
    el.addEventListener('touchstart', event => this.swipeStart(event), true);
    el.addEventListener('touchmove', event => this.swipeMove(event), true);
    el.addEventListener('touchend', event => this.swipeEnd(event), true);

    this.modalController.getTop().then(modal => {
      modal.onWillDismiss().then(() => {
        document.removeEventListener('mousedown', this.swipeStart, true);
        document.removeEventListener('mousemove', this.swipeMove, true);
        document.removeEventListener('mouseup', this.swipeMove, true);
        document.removeEventListener('touchstart', this.swipeStart, true);
        document.removeEventListener('touchmove', this.swipeMove, true);
        document.removeEventListener('touchend', this.swipeMove, true);
      });
    });
  }

  swipeStart(event) {
    const { pageX, pageY } = event.type === 'touchstart' ? event.changedTouches[0] : event;

    this.swipeState = {
      ...this.swipeState,
      phase: 'start',
      direction: 'none',
      distance: 0,
      startX: pageX,
      startY: pageY,
      startTime: new Date().getTime()
    };
  }

  swipeMove(event) {
    if (this.swipeState.phase === 'none') {
      return;
    }
    const { pageX, pageY } = event.type === 'touchmove' ? event.changedTouches[0] : event;
    // get horizontal dist traveled by finger while in contact with surface
    const distanceX = pageX - this.swipeState.startX;
    // get vertical dist traveled by finger while in contact with surface
    const distanceY = pageY - this.swipeState.startY;
    let direction;
    let distance;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
      direction = distanceX < 0 ? 'left' : 'right';
      distance = distanceX;
    } else {
      // else consider this a vertical swipe
      direction = distanceY < 0 ? 'up' : 'down';
      distance = distanceY;
    }
    this.swipeState = {
      ...this.swipeState,
      phase: 'move',
      direction,
      distance,
      distanceX,
      distanceY
    };
    event.preventDefault();
  }

  swipeEnd(event) {
    if (this.swipeState.phase === 'none') {
      return;
    }
    const { allowedTime, direction, restraint, startTime, threshold, distanceX, distanceY } = this.swipeState;
    let swipeType;

    const elapsedTime = new Date().getTime() - startTime; // get time elapsed
    if (elapsedTime <= allowedTime) {
      // first condition for a swipe met
      if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
        // 2nd condition for horizontal swipe met
        swipeType = direction; // set swipeType to either "left" or "right"
      } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
        // 2nd condition for vertical swipe met
        swipeType = direction; // set swipeType to either "top" or "down"
      }
    }

    this.swipeState = {
      ...this.swipeState,
      phase: 'end',
      swipeType
    };

    if (swipeType === 'down') {
      return this.closeModal();
    }
  }

  onError(error) {
    if (this.srcFallback) {
      this.src = this.srcFallback;
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
