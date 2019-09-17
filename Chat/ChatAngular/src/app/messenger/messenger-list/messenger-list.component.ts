import { Component, OnInit } from '@angular/core';
import { MessengerControlService } from "src/app/shared/messenger/messenger-control.service";
import {  interval } from 'rxjs';
import { Message } from 'src/app/shared/messenger/messenger-control.model';

@Component({
  selector: 'app-messenger-list',
  templateUrl: './messenger-list.component.html',
  styleUrls: ['./messenger-list.component.css']
})
export class MessengerListComponent implements OnInit {  
  messages: Message[] = [];
  latestMessageId: number = 1;

  constructor(private _messengercontrolService: MessengerControlService) { }

  ngOnInit() {
    interval(5000).subscribe(_ => {
      this._messengercontrolService.getMessages(this.latestMessageId).subscribe((data: Message[]) => {
        this.messages = this.messages.concat(data);

        // this.latestMessageId = data.findLatest().messageId;
      });
    })
  }
}