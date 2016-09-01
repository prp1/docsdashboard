import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'
// import './rxjs-operators'

import {
  //  NewsFeedListComponent, 
   NewsFeedItem, 
   NewsFeedItema 
} from '../'

// does not work if imported from '../'
import { NewsFeedActions } from '../shared/newsFeed.actions'
import { NewsFeedListComponent } from '../newsFeedList/newsFeedList.component'
import { NewsFeedsState } from '../shared/newsFeed.reducer'

@Component({
  selector: 'dd-news-feed-container',
  templateUrl: 'newsFeedContainer.template.html',
  directives: [
    NewsFeedListComponent
  ],
  providers: [
    NewsFeedActions
  ]
})

export class NewsFeedContainer {

  public isLoading$;
  public items$;
  private state$; 

  constructor(
    private store: Store<any>,
    private http: Http,
    private newsFeedActions: NewsFeedActions
    ){
          this.state$ = store.select('newsFeedReducer')
          this.items$ = this.state$.map(s => s.feeds)
          this.isLoading$ = this.state$.map(s => s.isLoading)
  }

  ngOnInit() {
        var socket = io()

        socket.on('newsFeed', (newItem) => {
          var action = this.newsFeedActions.add(newItem)
          this.store.dispatch(action)
        })
  }  

  reloadLastFeeds() {
    var action = this.newsFeedActions.loadLastFeeds()
    this.store.dispatch(action)
  }



}


      // with async pipe:
      //  this.newsFeedStore = store.select('newsFeedReducer')
       

//  * 	constructor(state$: Observable<AppState>) {
//  * 	  this.booksState$ = state$.let(getBooksState());
//  * 	}

          // this.items = store.select('newsFeedReducer').let(getFeedsState())


          // this.items = store.select('newsFeedReducer', s => s.feeds)
          // this.items = Observable.combineLatest(store.select('newsFeedReducer')).let(getFeedsState())
          // this.isLoading = this.newsFeedStore.select((state: NewsFeedsState) => state.isLoading)


      // without async pipe:
      // store.select('newsFeedReducer')
      //   .subscribe((state: NewsFeedsState) => {
      //     console.log('changed satete')

          

      //     // this.isLoading = state.isLoading;



      //     // this.items = this.newsFeedStore.map((state: NewsFeedsState) => state.feeds)
      //     // this.isLoading = state.isLoading;
      //   })           