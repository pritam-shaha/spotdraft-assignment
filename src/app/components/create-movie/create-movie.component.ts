import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { LABELS, MESSAGES } from 'src/app/app.const';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {
  @Input() createMovieFormGroup: FormGroup;
  @Output() onCreateClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onCreateMovie: EventEmitter<boolean> = new EventEmitter<boolean>();
  labels = LABELS;
  constructor(private _snackBar: MatSnackBar) { }

  createMovie() {
    this._snackBar.open(MESSAGES.CREATE_MOVIE_SUCCESS, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });
    this.onCreateMovie.next(true);
    this.onCreateClose.emit(false);
  }
}
