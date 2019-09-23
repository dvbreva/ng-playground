import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutesModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
