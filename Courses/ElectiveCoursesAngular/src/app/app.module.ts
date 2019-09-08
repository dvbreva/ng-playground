import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailComponent } from './course-details/course-detail/course-detail.component';
import { CourseDetailListComponent } from './course-details/course-detail-list/course-detail-list.component';
import { CourseDetailService } from './shared/course-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    CourseDetailComponent,
    CourseDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CourseDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
