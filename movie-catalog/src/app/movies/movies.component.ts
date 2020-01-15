import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovieService } from '../services/movie.service';
import Movie from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Array<Movie>;
  theaters: Array<Movie>;
  message: null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getPopularMovies().subscribe(data => {
      this.popular = data['results'].slice(0,8);
    });

    this.movieService.getTheaters().subscribe(data => {
      this.theaters = data['results'].slice(8,16);
    })
  }

  fromChild(event){
    console.log(event);
    this.message = event;
  }

}
