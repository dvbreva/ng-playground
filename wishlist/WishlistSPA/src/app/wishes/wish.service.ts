import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Wish from './wish.model';

@Injectable({
    providedIn: 'root'
})
export class WishService {
    private ApiURL: string = 'https://localhost:44314/api/wishes';

    constructor(private httpClient: HttpClient) { }

    getWishes(): Observable<Wish[]> {
        return this.httpClient.get<Wish[]>(this.ApiURL);
    }

    createWishes(payload: Wish): Observable<Wish> {
        return this.httpClient.post<Wish>(this.ApiURL, JSON.stringify(payload), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
