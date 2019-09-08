import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';
import { CourseDetail } from 'src/app/shared/course-detail.model';

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

  populateForm(cd:CourseDetail){
    this.service.formData = Object.assign({},cd);

  }
}
