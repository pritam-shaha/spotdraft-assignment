import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.html',
  styleUrls: ['./snackbar.css']
})
export class SnackBarComponent {
  @Input() msg: string;
  @Input() type: string;
  @Input() options: object;
}
