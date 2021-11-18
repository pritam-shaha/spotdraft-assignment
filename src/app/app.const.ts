import { TabLink } from "./models/app.model";

export const MENU_TAB_LINKS: TabLink[] = [
  {
    id: 'movies',
    name: 'Movie List',
    routerLink: '/movie_list',
  },
  {
    id: 'favMovie',
    name: 'favorite Movie',
    routerLink: '/fav_movie_list',
  },
];

export const MESSAGES = {
  SYSTEM_ERROR: 'Something bad happened; please try again later.',
  CREATE_MOVIE_SUCCESS: 'Movie Created Successfully'
};

export const LABELS = {
  LOADING: 'Loading ...',
  TOTAL_MOVIES: 'Total Movies: ',
  NO_DATA: 'Looks like you don’t have any data!',
  NO_FAV_MOVIE: 'Looks like you don’t have any favorite movie created!',
  ADD_MOVIE: 'ADD MOVIE',
  SEARCH_MOVIE: 'Search Movie',
  CREATE_MOVIE: 'CREATE MOVIE',
  CANCLE: 'CANCLE',

}

export const MAX_NUMBER = 100;

export const TableHeaders = ['id', 'title', 'director', 'producer', 'created', 'edited']
