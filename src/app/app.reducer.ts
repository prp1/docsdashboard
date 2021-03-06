import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

// import { newsFeedReducer }, * as fromNewsFeed from './newsFeed'
import { newsFeedReducer, NewsFeedsState } from './newsFeed'

export interface AppState {
    newsFeeds: NewsFeedsState;
}

export default compose(combineReducers)({
    newsFeeds: newsFeedReducer
})