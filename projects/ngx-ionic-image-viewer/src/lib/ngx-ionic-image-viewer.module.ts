import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { NgxIonicImageViewerComponent } from './ngx-ionic-image-viewer.component';
import { NgxIonicImageViewerDirective } from './ngx-ionic-image-viewer.directive';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';

@NgModule({
  declarations: [NgxIonicImageViewerComponent, ViewerModalComponent, NgxIonicImageViewerDirective],
  imports: [CommonModule, IonicModule],
  entryComponents: [ViewerModalComponent],
  exports: [NgxIonicImageViewerComponent, ViewerModalComponent, NgxIonicImageViewerDirective]
})
export class NgxIonicImageViewerModule {}
