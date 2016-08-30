import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'
// import './rxjs-operators'

import {
   NewsFeedListComponent, 
   NewsFeedItem, 
   NewsFeedItema, 
   NewsFeedActions
} from '../'

import { AppState } from '../../app.service'

@Component({
  selector: 'dd-news-feed-container',
  templateUrl: 'newsFeedContainer.template.html',
  directives: [
    //NewsFeedListComponent
  ],
  providers: [
   // NewsFeedActions
  ]
})

export class NewsFeedContainer {

  public items = []; 

  constructor(
    private store: Store<any>,
    private http: Http,
    private newsFeedActions: NewsFeedActions,
    private appState: AppState
    ){

      // this.items = store.select('newsFeedReducer')

      // without async pipe would be:
    store.select('newsFeedReducer')
      .subscribe((items: NewsFeedItema[]) => {
       // this.items = items;
      })  
  }

  ngOnInit() {

    // this.store.dispatch({
    //   type: 'GET_NEWS_FEEDS'
    // })    

    // this.getNewsFeeds()
    //   .subscribe((response: any) => {
    //     this.items = response
    //   })

        var socket = io('http://localhost:3001');

        socket.on('newsFeed', (newItem) => {
          // this.store.dispatch({
          //   type: 'ADD_NEWS_FEED_ITEM',
          //   payload: newItem
          // })

         // this.newsFeedActions.add(newItem)


        })
  }  



}