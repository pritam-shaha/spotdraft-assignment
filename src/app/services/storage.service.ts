import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  constructor() { }

  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public setItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  public removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  public getJsonItem(key: string) {
    return JSON.parse(this.getItem(key));
  }

  public setJsonItem(key: string, value: object) {
    return this.setItem(key, JSON.stringify(value));
  }

  public saveMovieToLocalStorage(movie) {
    const movieList = this.getJsonItem('fav-movie-list') || [];
    movieList.push(movie);
    this.setItem('fav-movie-list', JSON.stringify(movieList));
  }
}
