import {
  Component,
  Input,
} from '@angular/core';
import { Movie } from 'src/app/models/movie-list.model';
import { TableHeaders } from '../../app.const';

@Component({
  selector: 'app-movie-list-table',
  templateUrl: './movie-list-table.component.html',
  styleUrls: ['./movie-list-table.component.css']
})
export class MovieListTableComponent {
  @Input() movies: Movie[] = [];
  colHeaders = TableHeaders;
}
