import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie-list.model';
import { ConfigService } from 'src/app/services/config.service';
import { LABELS } from '../../app.const';

@Component({
  selector: 'app-fav-movie-list',
  templateUrl: './fav-movie-list.component.html',
  styleUrls: ['./fav-movie-list.component.css']
})
export class FavMovieListComponent implements OnInit {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  favMovies$: Observable<Movie[]>;
  labels = LABELS;
  constructor(private configService: ConfigService) {}
  ngOnInit() {
    this.favMovies$ = this.configService.getFavoriteMovies()
  }
}
