import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

import Movie  from "../models/movie.model";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '&api_key=659db8b0d483e766791f63ffd28afad6';
const IN_THEATHERS = 'https://api.themoviedb.org/3/discover/movie/'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  popularEndpoint = 'discover/movie?sort_by=popularity.desc';
  theathersEndpoint = 'discover/movie?primary_release_date.gte=2018-07-15&primary_release_date.lte=2019-02-01';

  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<Array<Movie>>{
    return this.http.get<Movie[]>(BASE_URL + this.popularEndpoint + API_KEY);
  }

  getTheaters() : Observable<Array<Movie>>{
    return this.http.get<Movie[]>(BASE_URL + this.theathersEndpoint + API_KEY)
  }
}
