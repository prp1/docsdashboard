import { ActionReducer, Action } from '@ngrx/store'
import { NewsFeedItema } from '../'

export const ADD_NEWS_FEED_ITEM = 'ADD_NEWS_FEED_ITEM'

export const newsFeedReducer: ActionReducer<NewsFeedItema[]> = (
    state: NewsFeedItema[] = [], 
    action: Action) => {
        
    switch (action.type) {
        case 'ADD_NEWS_FEED_ITEM':
            return [
                action.payload,
                ...state
            ]

        default:
            return state
    }
}