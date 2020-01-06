import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import Wish from '../wish.model';
import WishState from '../wish.state';
import * as WishActions from '../wish.action'

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {
  wish$: Observable<WishState>;
  WishSub: Subscription;
  WishesList: Wish[] = [];
  Content: string = '';
  IsCompleted: boolean = false;
  wishError: Error = null;

  constructor(private store: Store<{ todos: WishState }>) {
    this.wish$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    this.WishSub = this.wish$
      .pipe(
        map(x => {
          this.WishesList = x.Wishes;
          this.wishError = x.WishError;
        })
      )
      .subscribe();

    this.store.dispatch(WishActions.BeginGetWishAction());
  }

  ngOnDestroy() {
    if (this.WishSub) {
      this.WishSub.unsubscribe();
    }
  }

  addWish() {
    var wish: Wish = { Content: this.Content, IsCompleted: this.IsCompleted };

    this.store.dispatch(WishActions.BeginCreateWishAction({ payload: wish }));

    this.Content = '';
    this.IsCompleted = false; 
  }
}
