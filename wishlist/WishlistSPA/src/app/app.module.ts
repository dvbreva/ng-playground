import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishesComponent } from './wishes/component/wishes.component';
import { StoreModule } from '@ngrx/store';
import { WishReducer } from './wishes/wish.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { WishEffects } from './wishes/wish.effect';
import { HttpClientModule } from '@angular/common/http';

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
