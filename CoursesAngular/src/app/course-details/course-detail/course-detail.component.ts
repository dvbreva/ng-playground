import { Component, OnInit } from '@angular/core';
import { CourseDetailService } from 'src/app/shared/course-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styles: []
})
export class CourseDetailComponent implements OnInit {

  constructor(private service:CourseDetailService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form != null)
      form.resetForm();

      this.service.formData = {
        Id : 0,
        Name : '',
        Description : '',
        Capacity : 0,
        Deadline : new Date
      }
    }

  onSubmit(form:NgForm){
    this.service.postElectiveCourse(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }
}
