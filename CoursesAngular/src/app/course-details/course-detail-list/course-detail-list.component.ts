import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';

@Component({
  selector: 'app-course-detail-list',
  templateUrl: './course-detail-list.component.html',
  styles: []
})
export class CourseDetailListComponent implements OnInit {

  constructor(private service: CourseDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
