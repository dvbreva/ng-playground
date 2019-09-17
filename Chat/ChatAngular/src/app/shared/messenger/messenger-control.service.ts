import { Message } from './messenger-control.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessengerControlService {
    readonly rootUrl = 'https://localhost:44311/api';

    constructor(private http:HttpClient) { }

    postMessage(message: Message) : Observable<number> {
        return this.http.post<number>(this.rootUrl + '/messages', message);
    }

    getMessages(messageId: number = 0) : Observable<Message[]> {
        return this.http.get<Message[]>(this.rootUrl + `/messages/${messageId}`);
    }
}