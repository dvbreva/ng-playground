import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GithubProfileInfo } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: GithubProfileInfo;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getGithubProfileInfo('dvbreva').subscribe(data => this.profile = data);
  }

}
