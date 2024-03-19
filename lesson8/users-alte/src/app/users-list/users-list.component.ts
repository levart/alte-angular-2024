import {Component, inject} from '@angular/core';
import {UserService} from "../user.service";
import {JsonPipe} from "@angular/common";
import {UserItemComponent} from "../user-item/user-item.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    JsonPipe,
    UserItemComponent
  ],
  // providers: [UserService],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  userService = inject(UserService);

  get users() {
    return this.userService.users;
  }

}
