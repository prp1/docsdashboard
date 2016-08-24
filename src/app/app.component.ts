import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
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

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})

export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  // ngOnInit() {
  //   console.log('Initial App State', this.appState.state);
  // }

}