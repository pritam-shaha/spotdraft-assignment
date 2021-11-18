import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MENU_TAB_LINKS } from 'src/app/app.const';
import { TabLink } from 'src/app/models/app.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  tabLinks = MENU_TAB_LINKS;
}
