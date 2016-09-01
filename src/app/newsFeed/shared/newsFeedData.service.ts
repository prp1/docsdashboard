import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'

import { NewsFeedItema } from '../'

@Injectable()
export class NewsFeedDataService {

  constructor(
    private store: Store<any>,
    private http: Http
    ){
    // store.select('newsFeedReducer')
    //   .subscribe((items: NewsFeedItema[]) => {
    //     this.items = items;
    //   })
  } 

  getNewsFeeds(): Observable<NewsFeedItema[]> {
      console.log('---------/////////////////////////////-------------------')
      console.log('getting news feeds from server')
    return this.http.get('/api/newsfeed')
      .map(this.extractData)
      .catch(this.handleError) 
  }  

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }  

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }  

}