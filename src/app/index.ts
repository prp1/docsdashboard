// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { NewsFeedActions } from './newsFeed/shared/newsFeed.actions'
import { NewsFeedDataService } from './newsFeed/shared/newsFeedData.service'
// import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  NewsFeedActions,
  NewsFeedDataService
];
