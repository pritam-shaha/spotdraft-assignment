import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { FavMovieListComponent } from './containers/fav-movie-list/fav-movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { MovieListTableComponent } from './components/movie-list-table/movie-list-table.component';
import { SnackBarComponent } from './components/snackbar/snackbar';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { StorageService } from './services/storage.service';
import { cardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MovieListComponent,
    FavMovieListComponent,
    MovieListTableComponent,
    SnackBarComponent,
    CreateMovieComponent,
    cardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [ConfigService, StorageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
