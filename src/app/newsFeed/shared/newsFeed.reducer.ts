import { Observable } from 'rxjs/Observable'
import { ActionReducer, Action } from '@ngrx/store'

import { NewsFeedItema, NewsFeedActions } from '../'

export interface NewsFeedsState {
    isLoading: boolean
    feeds: NewsFeedItema[]
}

const defaultState: NewsFeedsState = {
    isLoading: false,
    feeds: []
}

export const newsFeedReducer: ActionReducer<NewsFeedsState> = (
    state: defaultState, 
    action: Action
    ) => {
        
console.log('smth')

    switch (action.type) {
        case NewsFeedActions.ADD_NEWS_FEED:

            return Object.assign({}, state, {
                feeds: [
                    action.payload,
                    ...state.feeds
                ]
            })

        case NewsFeedActions.LOAD_LAST_FEEDS:
            return Object.assign({}, state, {
                isLoading: true
            })

        case NewsFeedActions.LOADED_LAST_FEEDS:
        console.log(777)
            return Object.assign({}, state, {
                isLoading: false,
                feeds: action.payload
            })

        default:
            return state
    }
}

// export function getFeedsState() {
//   return (state$: Observable<NewsFeedsState>) => state$.select(s => s.feeds)
// }

// how to use:

//  * class MyComponent {
//  * 	constructor(state$: Observable<AppState>) {
//  * 	  this.booksState$ = state$.let(getFeedsState());
//  * 	}

//  export function getBooksState() {
//   return (state$: Observable<AppState>) => state$
//     .select(s => s.books);
// }