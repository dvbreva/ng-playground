import { createReducer, on, Action } from '@ngrx/store';

import WishState, { initializeState } from './wish.state';
import * as WishActions from './wish.action'
import Wish from './wish.model';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,

    on(WishActions.GetWishAction, state => state),

    on(WishActions.AddWishAction, (state: WishState, wish: Wish) => {
        return { 
            ...state, 
            Wishes: [...state.Wishes, wish], 
            WishError: null 
        };
    }),

    on(WishActions.SuccessGetWishAction, (state: WishState, { payload }) => {
        return { 
            ...state, 
            Wishes: payload 
        };
    }),

    on(WishActions.SuccessAddWishAction, (state: WishState, { payload }) => {
        return { 
            ...state, 
            Wishes: [...state.Wishes, payload], 
            WishError: null 
        };
    }),

    on(WishActions.ErrorWishAction, (state: WishState, error: Error) => {
        console.log(error);

        return { 
            ...state, 
            WishError: error 
        };
    })
);

export function WishReducer(state: WishState | undefined, action: Action) {
    return reducer(state, action);
}