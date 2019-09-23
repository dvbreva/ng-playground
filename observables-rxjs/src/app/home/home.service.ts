import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubProfileInfo } from './home.model';

@Injectable()
export class HomeService {
    
    constructor(private _httpClient: HttpClient) { }

    getGithubProfileInfo(username: string){
        const url = `https://api.github.com/users/${username}`;
    
        return this._httpClient.get<GithubProfileInfo>(url);
    }
}