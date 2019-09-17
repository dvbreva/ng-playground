import { Component, OnInit } from '@angular/core';
import { MessengerControlService } from "src/app/shared/messenger/messenger-control.service";
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/shared/messenger/messenger-control.model';

@Component({
  selector: 'app-messenger-control',
  templateUrl: './messenger-control.component.html',
  styleUrls: ['./messenger-control.component.css']
})
export class MessengerControlComponent implements OnInit {
  userId: number;
  formData: FormData;
  content: string;

  constructor(
    private service: MessengerControlService,
    private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = parseInt(this._activatedroute.snapshot.paramMap.get("userId"));

    // this.resetForm();
  }

  // resetForm(message?:NgForm) {
  //   if(form != null)
  //   message.resetForm();
  // }

  onSubmit(){ 
      this.insertMessage();
  }

  insertMessage(){
    this.service.postMessage(<Message>{ content: this.content, senderId: this.userId }).subscribe(
      _ => {        
        console.log('success message');
      },
      err => {
        console.log(err);
      }
    )
  }
}