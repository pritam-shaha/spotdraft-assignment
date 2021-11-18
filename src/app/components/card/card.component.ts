import {
  Component,
  Input,
} from '@angular/core';
@Component({
  selector: 'app-card-movie',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class cardComponent {
  @Input() movie;
}
