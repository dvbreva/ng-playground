import { createAction, props } from '@ngrx/store';
import Wish from './wish.model';

export const GetWishAction = createAction('[Wishes] - Get Wish');

export const AddWishAction = createAction(
  '[Wishes] - Add Wish',
  props<Wish>()
);

export const BeginGetWishAction = createAction('[Wishes] - Begin Get Wish');

export const SuccessGetWishAction = createAction(
  '[Wishes] - Success Get Wish',
  props<{ payload: Wish[] }>()
);

export const BeginAddWishAction = createAction(
  '[Wishes] - Begin Add Wish',
  props<{ payload: Wish }>()
);

export const SuccessAddWishAction = createAction(
  '[Wishes] - Success Add Wish',
  props<{ payload: Wish }>()
);

export const ErrorWishAction = createAction('[Wishes] - Error', props<Error>());