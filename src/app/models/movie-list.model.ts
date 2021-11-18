import { BaseAPIResponse } from "./app.model";
import { contains, toLower, any, curry, filter } from 'ramda';

export interface Movie {
  id: number;
  title: string;
  director: string;
  producer: string;
  created: Date;
  edited: Date;
}

export interface MovieListing {
  movies: Movie[];
  count: number;
}

export interface MovieListingAPIResponse extends BaseAPIResponse {
  data?: MovieListing;
}

export const toMovieListingModel = (res): Movie => ({
  id: res?.episode_id,
  title: res.title,
  director: res.director,
  producer: res.producer,
  created: !!res.created ? new Date(res.created) : null,
  edited: !!res.edited ? new Date(res.edited) : null,
});

const isContains = (searchText: string) => contains(searchText);

const compareSearchText = (searchText: string, movie: Movie): boolean => any(isContains(toLower(searchText)), [toLower(movie.title)]);

const curriedCompareSearchText = curry(compareSearchText);

export const filterMovies = (searchText: string, movies: Movie[]): Movie[] => filter(curriedCompareSearchText(searchText), movies);

