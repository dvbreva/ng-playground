import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import Movie from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Array<Movie>;
  theaters: Array<Movie>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getPopularMovies().subscribe(data => {
      this.popular = data['results'];
      console.log(data);
    });
  }
  //popular$ = this.movieService.getPopularMovies();
}
