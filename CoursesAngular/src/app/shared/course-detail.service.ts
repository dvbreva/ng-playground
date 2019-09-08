import { Injectable } from '@angular/core';
import { CourseDetail } from './course-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  formData:CourseDetail;
  readonly rootUrl = 'http://localhost:60597/api';
  list : CourseDetail[];

  constructor(private http:HttpClient) { }

  postElectiveCourse(){
  return this.http.post(this.rootUrl + '/ElectiveCourses', this.formData);
  }

  putElectiveCourse(){
  return this.http.put(this.rootUrl + '/ElectiveCourses/' + this.formData.Id, this.formData);
  }

  refreshList(){
    this.http.get(this.rootUrl + '/ElectiveCourses')
    .toPromise()
    .then(res => this.list = res as CourseDetail[]);
  }
}
