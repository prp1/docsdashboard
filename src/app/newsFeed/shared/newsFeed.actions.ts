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

  static LOAD_LAST_FEEDS_SUCCESS = 'LOAD_LAST_FEEDS_SUCCESS';
  loadLastFeedsSuccess(items: NewsFeedItema[]): Action {
    return {
      type: NewsFeedActions.LOAD_LAST_FEEDS_SUCCESS,
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
