export * from './app.component'
export * from './app.service'
export * from './app.routes'
export * from './app.settings'

import { AppSettings } from './app.settings'
import { NewsFeedActions } from './newsFeed/shared/newsFeed.actions'
import { NewsFeedDataService } from './newsFeed/shared/newsFeedData.service'

export const APP_PROVIDERS = [
  NewsFeedActions,
  NewsFeedDataService
]