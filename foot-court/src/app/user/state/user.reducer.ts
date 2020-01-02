import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
    maskUsername: boolean,
    currentUser: User
};

const initialState: UserState = {
    maskUsername: false,
    currentUser: null
};

// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUsername
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action: UserActions): UserState {
    switch (action.type) {
        case UserActionTypes.MaskUsername:
            return {
                ...state,
                maskUsername: action.payload
            };

        default:
            return state;
    }
};