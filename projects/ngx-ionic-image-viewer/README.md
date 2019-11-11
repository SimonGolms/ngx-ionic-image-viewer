# ngx-ionic-image-viewer
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/simongolms/ngx-ionic-image-viewer" />
  </a>
</p>

> An Ionic 4 Angular component to view & zoom on images and photos without any additional dependencies.

## Overview

  - [Prerequisits](#prerequisits)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Properties](#properties)
  - [Workspace](#workspace)
    - [Development server](#development-server)
    - [Code scaffolding](#code-scaffolding)
    - [Build](#build)
    - [Publishing](#publishing)
    - [Running unit tests](#running-unit-tests)
    - [Running end-to-end tests](#running-end-to-end-tests)
    - [Further help](#further-help)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)

## Prerequisites

- ionic >= 4.0.0
- angular >= 8.0.0

## Installation

```bash
npm install --save ngx-ionic-image-viewer
```

## Usage

Import the module and add it to your imports section in your main AppModule:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    NgxIonicImageViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
      { 
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Import the module and add it to your imports section of your component where you want to use it (e.g. `home.module.ts`):

```js
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

...

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NgxIonicImageViewerModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

```

Add `ion-img-viewer` within the HTML of your module (e.g. `home.page.html`)

```html
<ion-header>
  <ion-toolbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <div class="ion-padding">
    The world is your oyster.
  </div>
  <ion-img-viewer title="" alt="" text="" src="./assets/img/demo.jpg"></ion-img-viewer>
</ion-content>

```

## Properties

<table>
    <!-- alt -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>alt</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>This attribute defines the alternative text describing the image. Users will see this text displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td>alt</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>string | undefined</td>
        </tr>
    </tbody>
    <!-- text -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>text</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Sets the text in the footer of the viewer </td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td>text</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>string | undefined</td>
        </tr>
    </tbody>
    <!-- title -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>title</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Sets the title in the header of the viewer.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td>title</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>string | undefined</td>
        </tr>
    </tbody>
    <!-- src -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>src</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>The image URL. This attribute is mandatory for the <code>&lt;img&gt;</code> element.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td>src</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>string | undefined</td>
        </tr>
    </tbody>
</table>

## Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

### Development server

1. Run the build command every time a file change

    ```bash
    ./ngx-ionic-image-viewer-workspace $ ng build --watch
    ```

2. Create a local symlink using [`npm link`](https://docs.npmjs.com/cli/link) that can then be used in the project where you want to integrate the package as you don’t want to build, publish and update a library all the time while testing.

    ```bash
    ./ngx-ionic-image-viewer-workspace/dist/ngx-ionic-image-viewer $ npm link
    ```

3. Run the `npm link` command inside the projects folder to link the global installation target into your project’s node_modules folder.

    ```bash
    ./ngx-ionic-image-viewer-workspace/demo $ npm link ngx-ionic-image-viewer
    ```

4. Start a local dev server for app dev/testing. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

    ```bash
    ./ngx-ionic-image-viewer-workspace/demo $ ionic serve
    ```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Publishing

After building your library with `ng build ngx-wordpress`, go to the dist folder `cd dist/ngx-wordpress` and run `npm publish`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Author

**Simon Golms**

- Digital Card: `npx simongolms`
- Github: [@simongolms](https://github.com/simongolms)
- Website: gol.ms

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/simongolms/ngx-ionic-image-viewer/issues).

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2019 [Simon Golms](https://github.com/simongolms).<br />
This project is [MIT](https://github.com/simongolms/ngx-ionic-image-viewer/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
