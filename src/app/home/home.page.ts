import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // Get a random image
  imgSource = 'https://picsum.photos/1000/1500/?random';

  constructor() {}
}
