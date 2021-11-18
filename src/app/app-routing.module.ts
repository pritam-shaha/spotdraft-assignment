import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavMovieListComponent } from './containers/fav-movie-list/fav-movie-list.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';

const routes: Routes = [
  { path: 'fav_movie_list', component: FavMovieListComponent },
  { path: 'movie_list', component: MovieListComponent },
  { path: '', redirectTo: 'movie_list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
