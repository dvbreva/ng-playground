import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: []
})
export class CourseDetailComponent implements OnInit {

  constructor(private service:CourseDetailService) { }

  ngOnInit() {
  }

}
