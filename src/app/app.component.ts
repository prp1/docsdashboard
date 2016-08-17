/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { Nav } from './nav';
// import { io } from 'socket.io-client';

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

  ngOnInit() {
    console.log('Initial App State', this.appState.state);

    // var socket = new io.Socket('localhost',{
    //   port: 8080
    // });
    // socket.connect(); 

    // // Add a connect listener
    // socket.on('connect',function() {
    //   console.log('Client has connected to the server!');
    // });    


  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
