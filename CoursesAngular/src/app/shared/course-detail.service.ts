import { Injectable } from '@angular/core';
import { CourseDetail } from './course-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailService {
  formData:CourseDetail
  constructor() { }
}
