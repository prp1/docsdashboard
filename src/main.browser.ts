import { bootstrap } from '@angular/platform-browser-dynamic'
import { PLATFORM_PROVIDERS } from './platform/browser'
import { ENV_PROVIDERS, decorateComponentRef } from './platform/environment'
import { provideStore } from '@ngrx/store'
import { runEffects } from '@ngrx/effects'

import { App, APP_PROVIDERS } from './app'
import { newsFeedReducer } from './app/newsFeed'
import { NewsFeedEffects } from './app/newsFeed/shared/newsFeed.effects'

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    // To add more vendor providers please look in the platform/ folder
    ...PLATFORM_PROVIDERS,
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS,
    provideStore(
      { 
        newsFeedReducer: newsFeedReducer 
      },
      { 
        newsFeedReducer: {
          isLoading: false,
          feeds: [    
              { title: 'Paulius commited', description: 'Refactored file upload' },
              { title: 'Tomas commited', description: 'Added migrations' }
          ] 
        }
      }
    ),
    runEffects([NewsFeedEffects])
  ])
  .then(decorateComponentRef)
  .catch(err => console.error(err));
}

/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
