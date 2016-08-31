import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { NewsFeedItema } from '../'

@Injectable()
export class NewsFeedActions {

  constructor() {

  }

  static GET_NEWS_FEEDS = 'GET_NEWS_FEEDS';
  getAll(): Action {
    return {
      type: NewsFeedActions.GET_NEWS_FEEDS
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
