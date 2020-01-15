import { createAction, props } from '@ngrx/store';

import Wish from './wish.model';

export const GetWishAction = createAction('Get Wish');

export const CreateWishAction = createAction(
  'Create Wish',
  props<Wish>()
);

export const BeginGetWishAction = createAction('Begin Get Wish');

export const SuccessGetWishAction = createAction(
  'Success Get Wish',
  props<{ payload: Wish[] }>()
);

export const BeginCreateWishAction = createAction(
  'Begin Create Wish',
  props<{ payload: Wish }>()
);

export const SuccessCreateWishAction = createAction(
  'Success Create Wish',
  props<{ payload: Wish }>()
);

export const ErrorWishAction = createAction('Error', props<Error>());