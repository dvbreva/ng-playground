import { Injectable } from '@angular/core';
import { CourseDetail } from './course-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  formData:CourseDetail;
  readonly rootUrl = 'http://localhost:60597/api';

  constructor(private http:HttpClient) { }

  postElectiveCourse(formData:CourseDetail){
  return this.http.post(this.rootUrl+'/ElectiveCourses',formData);
  }
}
