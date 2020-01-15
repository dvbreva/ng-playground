import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { WishesComponent } from './wishes/component/wishes.component';
import { WishReducer } from './wishes/wish.reducer';
import { WishEffects } from './wishes/wish.effect';

@NgModule({
  declarations: [
    AppComponent,
    WishesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: WishReducer }),
    EffectsModule.forRoot([WishEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
