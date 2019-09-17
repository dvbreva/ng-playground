import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessengerComponent } from './messenger/messenger.component';
import { AboutComponent } from './about/about.component';
import { MessengerListComponent } from './messenger/messenger-list/messenger-list.component';
import { MessengerControlComponent } from './messenger/messenger-control/messenger-control.component';

import { UserService } from './shared/user/user.service';
import { MessengerControlService } from "./shared/messenger/messenger-control.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessengerComponent,
    AboutComponent,
    MessengerListComponent,
    MessengerControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'messenger/:userId', component : MessengerComponent },
      { path : 'about', component : AboutComponent },
      { path : 'home', component : HomeComponent },
      { path : '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [UserService,MessengerControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
