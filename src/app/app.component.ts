import { Component, ViewEncapsulation } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  directives: [
    Nav
  ],
  template: `
    <dd-nav></dd-nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer style="margin-top: 50px;">
      &copy; TSDocs team
    </footer>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor() {

  }

}