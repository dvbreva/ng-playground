import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  latestMessageId: number;

  constructor() { }

  ngOnInit() {
  }

  onMessageIdChanged(messageId: number): void{
    this.latestMessageId = messageId;
  }
}