import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, Subject } from 'rxjs';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { isNotNullOrEmpty } from 'src/app/helpers/app.helpers';
import { filterMovies, Movie, MovieListingAPIResponse } from 'src/app/models/movie-list.model';
import { ConfigService } from '../../services/config.service';
import { LABELS } from '../../app.const';
import { FormGroup } from '@angular/forms';
import { movieFormBuilder } from 'src/app/models/app.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchText$ = new BehaviorSubject<string>('');
  showCreateMovie$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  createMovie$ = new Subject<boolean>();
  error$: Observable<string>;
  totalCount$: Observable<number>;
  movies$: Observable<Movie[]>;

  labels = LABELS;
  createMovieForm: FormGroup;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.initStreams();
    this.createMovieForm = movieFormBuilder();
    this.createMovie$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(() => this.configService.createMovie(this.createMovieForm.value)),
      tap(() => `${this.loading$.next(false),  this.createMovieForm.reset()}`),
    ).subscribe();
  }

  initStreams() {
    const movieResponse$ = this.getMovies();
    const movies$ = movieResponse$.pipe(
      map((res) => (res.data?.movies ? res.data.movies : []))
    );
    this.error$ = movieResponse$.pipe(map((res) => res.error));
    this.movies$ = combineLatest([this.searchText$, movies$]).pipe(
      map(([searchText, movies]: [string, Movie[]]) => {
        return isNotNullOrEmpty(searchText)
          ? filterMovies(searchText, movies)
          : movies;
      })
    );
    this.totalCount$ = this.movies$.pipe(map((movieList: Movie[]) => movieList.length));
  }

  getMovies(): Observable<MovieListingAPIResponse> {
    return this.configService.getMovielist().pipe(tap(() => this.loading$.next(false)), share());
  }

  onSearchTextChange(searchText: string) {
    this.searchText$.next(searchText);
  }

  createMovie() {
    this.createMovie$.next(true);
  }
}