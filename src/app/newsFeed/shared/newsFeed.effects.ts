import { Injectable } from '@angular/core'
import { StateUpdates, Effect } from '@ngrx/effects'

import { NewsFeedActions, NewsFeedDataService } from '../'

@Injectable()
export class NewsFeedEffects {
    constructor (
        private update$: StateUpdates<any>, // <AppSt_ate>
        private newsFeedActions: NewsFeedActions,
        private newsFeedDataService: NewsFeedDataService
    ) {}

@Effect() loadLastFeeds$ = this.update$
    .whenAction(NewsFeedActions.LOAD_LAST_FEEDS)
    .switchMap(() => this.newsFeedDataService.getNewsFeeds())
    .map(newsFeeds => this.newsFeedActions.loadLastFeedsSuccess(newsFeeds))
}