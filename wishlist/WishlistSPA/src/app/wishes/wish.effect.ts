import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { WishService } from './wish.service';
import * as WishActions from './wish.action';
import Wish from './wish.model';

@Injectable()
export class WishEffects {
    constructor(private wishService: WishService,
        private action$: Actions) { }

    GetWishes$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(WishActions.BeginGetWishAction),
            mergeMap(action =>
                this.wishService.getWishes().pipe(
                    map((data: Wish[]) => {
                        return WishActions.SuccessGetWishAction({ payload: data });
                    }),
                    catchError((error: Error) => {
                        return of(WishActions.ErrorWishAction(error));
                    })
                )
            )
        )
    );

    CreateWishes$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(WishActions.BeginCreateWishAction),
            mergeMap(action =>
                this.wishService.createWishes(action.payload).pipe(
                    map((data: Wish) => {
                        return WishActions.SuccessCreateWishAction({ payload: data });
                    }),
                    catchError((error: Error) => {
                        return of(WishActions.ErrorWishAction(error));
                    })
                )
            )
        )
    );
}