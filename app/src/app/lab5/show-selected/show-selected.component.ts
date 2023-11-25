import { Component, Input } from '@angular/core';
import { ShowUsersComponent } from '../show-users/show-users.component';

@Component({
  selector: 'app-show-selected',
  templateUrl: './show-selected.component.html',
  styleUrl: '../show-users/show-users.component.scss'
})
export class ShowSelectedComponent extends ShowUsersComponent {
  @Input() checkedUsers: any[] = [];

  override ngOnInit(): void {  }
}
