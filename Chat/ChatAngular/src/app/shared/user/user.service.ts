import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    formData: User;
    readonly rootUrl = 'https://localhost:44311/api';

    constructor(private http:HttpClient) { }

    postUser() : Observable<User>{
        return this.http.post<User>(this.rootUrl + '/users', this.formData);
    }
}