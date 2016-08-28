// import { NgModule }       from '@angular/core';
// import { BrowserModule  } from '@angular/platform-browser';
// import { PLATFORM_PROVIDERS } from '../platform/browser';
// import { ENV_PROVIDERS, decorateComponentRef } from '../platform/environment';

// import { App, APP_PROVIDERS }   from './';
// import { Store, StoreModule } from '@ngrx/store'
// import { newsFeedReducer } from './newsFeed';

// @NgModule({
//     declarations: [App],
//     imports: [
//         BrowserModule,
//         StoreModule.provideStore(
//             { 
//                 newsFeed: newsFeedReducer 
//             }, 
//             { 
//                 newsFeed: [] 
//             }
//         ),
//         PLATFORM_PROVIDERS,
//         ENV_PROVIDERS,
//         APP_PROVIDERS
//     ],
//     bootstrap: [App],
// })
// export class AppModule {}