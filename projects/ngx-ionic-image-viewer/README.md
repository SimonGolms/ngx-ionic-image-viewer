# ngx-ionic-image-viewer <!-- omit in toc -->

<p>
  <a href="https://www.npmjs.com/package/ngx-ionic-image-viewer" target="_blank">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/ngx-ionic-image-viewer.svg" />
  </a>
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://conventionalcommits.org" target="_blank">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" />
  </a>
  <a href="https://github.com/conventional-changelog/standard-version" target="_blank">
    <img alt="Standard Version" src="https://img.shields.io/badge/release-standard%20version-brightgreen.svg" />
  </a>
  <a href="https://github.com/simongolms/ngx-ionic-image-viewer/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/simongolms/ngx-ionic-image-viewer" />
  </a>
</p>

> An Ionic 4 Angular module to view & zoom on images and photos without any additional dependencies.

## Demo <!-- omit in toc -->

[Live Demo](https://ionic4-image-viewer-example.netlify.com) | [Stackblitz](https://stackblitz.com/github/SimonGolms/ngx-ionic-image-viewer/tree/master/demo)

![ngx-ionic-image-viewer-showcase](https://github.com/SimonGolms/ngx-ionic-image-viewer/raw/master/docs/showcase.gif)

## Overview <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Import](#import)
  - [Component](#component)
  - [Directive](#directive)
  - [Controller](#controller)
- [Properties](#properties)
- [Workspace](#workspace)
  - [Local Development](#local-development)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Release & Publishing](#release--publishing)
  - [Manual Publishing](#manual-publishing)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)
    - [Committing](#committing)
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

### Import

Import the module and add it to your imports section in your main AppModule:

```js
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

...

@NgModule({
  imports: [
    NgxIonicImageViewerModule
  ],
})
export class AppModule {}
```

Import the module and add it to your imports section of your component where you want to use it (e.g. `home.module.ts`):

```js
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';

...

@NgModule({
  imports: [
    NgxIonicImageViewerModule
  ],
})
export class HomePageModule {}

```

### Component

Add `ion-img-viewer` within the HTML of your module (e.g. `home.page.html`)

```html
<ion-img-viewer 
  title="Demo" 
  text="Component" 
  scheme="dark" 
  src="./assets/img/demo.jpg">
</ion-img-viewer>
```

### Directive

Add `ionImgViewer` as a directive within the `ion-img` HTML element of your module (e.g. `home.page.html`)

```html
<ion-img 
  ionImgViewer 
  title="Demo" 
  text="Directive" 
  scheme="light" 
  src="./assets/img/demo.jpg">
</ion-img>
```

### Controller

Import `ViewerModalComponent` from `ngx-ionic-image-viewer` and add it to the `ModalController`. Within the `componentProps`, all available properties can be passed, whereby `src` is always required. In addition you must add the css class `ion-img-viewer` to the property `cssClass`.
Use `cssClass: ['ion-img-viewer', 'my-custom-ion-img-viewer']`in case you want to add more css classes.

```js
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

export class HomePage {

  constructor(public modalController: ModalController) {}

  async openViewer() {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: "./assets/img/demo.jpg"
      },
      cssClass: 'ion-img-viewer'
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }
}
```

```html
<ion-button (click)="openViewer()">Open Viewer</ion-button>
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
            <td><code>alt</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- cssClass -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>cssClass</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Additional classes to apply for custom CSS. If multiple classes are provided they should be separated by spaces.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>cssClass</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>string[]</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- slideOptions -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>scheme</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Sets the color scheme.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>scheme</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>"auto"</code> | <code>"dark"</code> | <code>"light"</code> | <code>undefined</code></td>
        </tr>
        <tr>
            <td>Default</td>
            <td><code>"auto"</code></td>
        </tr>
    </tbody>
    <!-- slideOptions -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>slideOptions</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Options to pass to the swiper instance. See <a>http://idangero.us/swiper/api/</a> for valid options.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>slideOptions</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>object</code> | <code>undefined</code></td>
        </tr>
        <tr>
            <td>Default</td>
            <td><code>{ centeredSlides: true, passiveListeners: false, zoom: { enabled: true } }</code></td>
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
            <td>The image url. This attribute is mandatory for the <code>&lt;img&gt;</code> element.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>src</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- srcFallback -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>srcFallback</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>The image url to display an alternative image in case the original image could not be loaded. Similiar to <code>(error)="src=./assets/no-image.png"</code></td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>srcFallback</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- srcHighRes -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>srcHighRes</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>The image url to display a high-resolution image instead of the original image when opening the viewer.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>srcHighRes</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- swipeToClose -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>swipeToClose</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>Swipe down to close the viewer.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>swipeToClose</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>boolean</code> | <code>undefined</code></td>
        </tr>
        <tr>
            <td>Default</td>
            <td><code>true</code></td>
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
            <td>Sets the text in the footer of the viewer.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>text</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
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
            <td><code>title</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>string</code> | <code>undefined</code></td>
        </tr>
    </tbody>
    <!-- titleSize -->
    <thead>
        <tr>
            <th colspan="2" align="left"><h3>titleSize</h3></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Description</td>
            <td>The size of the title.</td>
        </tr>
        <tr>
            <td>Attribute</td>
            <td><code>titleSize</code></td>
        </tr>
        <tr>
            <td>Type</td>
            <td><code>"large"</code> | <code>"small"</code> | <code>undefined</code></td>
        </tr>
    </tbody>
</table>

## Workspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

### Local Development

1. Run the command to start the build every time a file change: 

   ```bash
   npm run build:watch
   ```

2. Run the command to create a local symlink and start a local dev server fo app dev/testing.

   ```bash
   npm run ionic:serve
   ```

   - [`npm link`](https://docs.npmjs.com/cli/link): Create a local symlink that can then be used in the project where you want to integrate the package as you don’t want to build, publish and update a library all the time while testing.
   - Run the command `npm link ngx-ionic-image-viewer` inside the projects folder to link the global installation target into your project’s `node_modules` folder.
   - [`ionic serve`](https://ionicframework.com/docs/cli/commands/serve): Start a local dev server for app dev/testing. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

> Check `package.json` for lifecycle events

### Release & Publishing

Run `npm run release` to create a new build & release with `release-it`. This bumps the version of `projects/ngx-ionic-image-viewer/package.json`, uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update CHANGELOG.md, commits package.json and CHANGELOG.md and tags a new release. The new release gets published to GitHub and npm automatically.

> Check `package.json` and `.release-it.json` for lifecycle events

Once the confirmation of npm has been received, the command `npm run demo:update` can be run to update the demo to the latest version and commit the change.

### Manual Publishing

After building your library with `ng build ngx-ionic-image-viewer`, go to the dist folder `cd dist/ngx-ionic-image-viewer` and run `npm publish`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Committing

Run `npx git-cz` to generate a valid commit message. It’s easy to forget about the commit convention so to be consistent use [commitizen](https://github.com/commitizen/cz-cli) to generate our commits and husky to manage a Git commit-msg hook to validate the commit message.
Further information: [How to automate versioning and publication of an npm package](https://itnext.io/how-to-automate-versioning-and-publication-of-an-npm-package-233e8757a526)

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
