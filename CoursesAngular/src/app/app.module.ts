import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailComponent } from './course-details/course-detail/course-detail.component';
import { CourseDetailListComponent } from './course-details/course-detail-list/course-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    CourseDetailComponent,
    CourseDetailListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
