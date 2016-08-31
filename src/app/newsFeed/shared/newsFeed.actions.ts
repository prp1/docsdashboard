import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { NewsFeedItema } from '../'

@Injectable()
export class NewsFeedActions {

  constructor() {

  }

  static LOAD_LAST_FEEDS = 'LOAD_LAST_FEEDS';
  loadLastFeeds(): Action {
    return {
      type: NewsFeedActions.LOAD_LAST_FEEDS
    }
  }

  static LOADED_LAST_FEEDS = 'LOADED_LAST_FEEDS';
  loadedLastFeeds(items: NewsFeedItema[]): Action {
    return {
      type: NewsFeedActions.LOADED_LAST_FEEDS,
      payload: items
    }
  }

  static ADD_NEWS_FEED = 'ADD_NEWS_FEED';
  add(item: NewsFeedItema): Action {
    return {
      type: NewsFeedActions.ADD_NEWS_FEED,
      payload: item
    }
  }

}
