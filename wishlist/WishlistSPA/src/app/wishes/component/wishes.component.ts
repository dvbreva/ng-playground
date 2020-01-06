import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import WishState from '../wish.state';
import { Observable, Subscription } from 'rxjs';
import Wish from '../wish.model';
import * as WishActions from '../wish.action'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.sass']
})
export class WishesComponent implements OnInit {
  wish$: Observable<WishState>;
  wishSubscription: Subscription;
  WishesList: Wish[] = [];

  Content: string = '';
  IsCompleted: boolean = false;
  wishError: Error = null;

  constructor(private store: Store<{ wishes: WishState }>) {
    this.wish$ = store.pipe(select('wishes'));
  }

  ngOnInit() {
    this.wishSubscription = this.wish$
      .pipe(
        map(x => {
          this.WishesList = x.Wishes;
          this.wishError = x.WishError;
        })
      )
      .subscribe();

    this.store.dispatch(WishActions.BeginGetWishAction());
  }

  addWish() {
    const wish: Wish = { Content: this.Content, IsCompleted: this.IsCompleted };
    this.store.dispatch(WishActions.BeginAddWishAction({ payload: wish }));
    this.Content = '';
    this.IsCompleted = false;
  }

  ngOnDestroy() {
    if (this.wishSubscription) {
      this.wishSubscription.unsubscribe();
    }
  }

}
