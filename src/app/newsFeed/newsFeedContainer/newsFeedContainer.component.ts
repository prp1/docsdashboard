import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'
// import './rxjs-operators'

import { NewsFeedItem, NewsFeedItema } from '../'

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

  constructor(
    private store: Store<any>,
    private http: Http
    ){

    store.select('newsFeedReducer')
      .subscribe((items: NewsFeedItema[]) => {
        this.items = items;
      })
  }

  ngOnInit() {

    this.store.dispatch({
      type: 'GET_NEWS_FEEDS'
    })    

    // this.getNewsFeeds()
    //   .subscribe((response: any) => {
    //     this.items = response
    //   })

        // var socket = io('http://localhost:3001');

        // socket.on('newsFeed', (newItem) => {
        //   this.store.dispatch({
        //     type: 'ADD_NEWS_FEED_ITEM',
        //     payload: newItem
        //   })
        // })
  }  

}