import { ActionReducer, Action } from '@ngrx/store'
import { NewsFeedItema, NewsFeedActions } from '../'

export const ADD_NEWS_FEED_ITEM = 'ADD_NEWS_FEED_ITEM'

export const newsFeedReducer: ActionReducer<NewsFeedItema[]> = (
    state: NewsFeedItema[] = [], 
    action: Action) => {
        
    switch (action.type) {
        case NewsFeedActions.ADD_NEWS_FEED:
            return [
                action.payload,
                ...state
            ]

        default:
            return state
    }
}