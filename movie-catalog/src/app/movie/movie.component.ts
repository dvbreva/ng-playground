import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import Movie from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: Movie;

  @Output()
  clickedButtonEmitter = new EventEmitter();
  imagePath: string;

  constructor() { }

  ngOnInit() {
    console.log(this.movie);
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

  clickButton(){
    console.log(this.movie.id);
    this.clickedButtonEmitter.emit(this.movie.id.toString());
  }
}
