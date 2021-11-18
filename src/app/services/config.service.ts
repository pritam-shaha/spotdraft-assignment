import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseAPIResponse, Status } from '../models/app.model';
import { MESSAGES } from '../app.const';
import { Movie, MovieListingAPIResponse, toMovieListingModel } from '../models/movie-list.model';
import { StorageService } from './storage.service';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient, private storageService: StorageService) {
  }

  handleError<T extends BaseAPIResponse>(error: HttpErrorResponse): T {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      switch (error.status) {
        case 400:
        case 401:
        case 403: {
          return {
            status: Status.Error,
            error: error.error,
          } as T;
        }
      }
    }
    return {
      status: Status.Error,
      error: MESSAGES.SYSTEM_ERROR,
    } as T;
  }

  getMovielist(): Observable<MovieListingAPIResponse> {
    return this.http.get(`${environment.swapiSvcUrl}films`).pipe(
      tap((res) => localStorage.setItem('movie-list', JSON.stringify(res))),
      map((res: any) =>
        !res
          ? {
            status: Status.Success,
            data: {
              movies: [],
              count: 0,
            },
          }
          : {
            status: Status.Success,
            data: {
              movies: res.results.map((m: any) => toMovieListingModel(m)),
              count: res.count,
            },
          }
      ),
      catchError((err: HttpErrorResponse) =>
        of(this.handleError<MovieListingAPIResponse>(err))
      )
    );
  }

  createMovie(createMovie: any): Observable<any> {
    this.storageService.saveMovieToLocalStorage(createMovie);
    return of({})
  }

  getFavoriteMovies(): Observable<Movie[]> {
    return of(this.storageService.getJsonItem('fav-movie-list'))
  }
}