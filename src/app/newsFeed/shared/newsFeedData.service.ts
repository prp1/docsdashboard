import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Injectable, Inject } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Store } from '@ngrx/store'

import { AppSettings } from '../../'
import { NewsFeedItema } from '../'

@Injectable()
export class NewsFeedDataService {

  constructor(
    private store: Store<any>,
    private http: Http
    // neither of these work:
    // private appSettings: AppSettings 
    //@Inject('AppSettings') private appSettings: AppSettings
    //  @Inject(AppSettings) appSettings: any
    ){} 

  getNewsFeeds(): Observable<NewsFeedItema[]> {
    return this.http.get(`${(<any>window).docsDashBoardConfig.apiUrl}newsfeed`)
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