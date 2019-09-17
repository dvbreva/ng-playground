import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from "src/app/shared/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();

      this.service.formData = {
        id : 0,
        username : ''
      }
  }

  onSubmit(form: NgForm){ 
      this.insertUser(form);      
  }

  insertUser(form: NgForm){
    this.service.postUser().subscribe(
      user => {
        this.router.navigate([`/messenger/${user.id}`]);

        console.log('success');
      },
      err => {
        console.log(err);
      }
    )
  }

  onBack(): void{
    this.router.navigate(['/welcome']); 
  }
}
