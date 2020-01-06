import { createReducer, on, Action } from '@ngrx/store';

import WishState, { initializeState } from './wish.state';
import * as WishActions from './wish.action'
import Wish from './wish.model';

const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(WishActions.GetWishAction, state => state),
    on(WishActions.CreateWishAction, (state: WishState, wish: Wish) => {
        return {
            ...state,
            Wishes: [...state.Wishes, wish],
            WishError: null
        };
    }),
    on(WishActions.SuccessGetWishAction, (state: WishState, { payload }) => {
        return { ...state, Wishes: payload, WishError: null };
    }),
    on(WishActions.SuccessCreateWishAction, (state: WishState, { payload }) => {
        return {
            ...state,
            Wishes: [...state.Wishes, payload],
            WishError: null
        };
    }),
    on(WishActions.ErrorWishAction, (state: WishState, error: Error) => {
        return {
            ...state,
            WishError: error
        };
    })
);

export function WishReducer(
    state: WishState | undefined,
    action: Action): WishState {
    return reducer(state, action);
}