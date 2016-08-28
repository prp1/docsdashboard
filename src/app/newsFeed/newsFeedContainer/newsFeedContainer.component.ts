import { Component } from '@angular/core'
import { Store } from '@ngrx/store';

import { NewsFeedItem } from '../'
import { NewsFeedItema } from '../';

@Component({
  selector: 'dd-news-feed-container',
  templateUrl: 'newsFeedContainer.template.html',
  directives: [
    //NewsFeedItem
  ]  
})

export class NewsFeedContainer {

  public items: NewsFeedItema[] = [

  ];  

  constructor(private store: Store<any>){
    store.select('newsFeedReducer')
      .subscribe((items: NewsFeedItema[]) => {
        this.items = items;
      })
  }

  ngOnInit() {
        var socket = io('http://localhost:3001');

        socket.on('newsFeed', (newItem) => {
          this.store.dispatch({
            type: 'ADD_NEWS_FEED_ITEM',
            payload: newItem
          })
        })
  }

}