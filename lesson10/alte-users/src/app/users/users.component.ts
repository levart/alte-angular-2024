import {Component, inject} from '@angular/core';
import {filter, map, of} from "rxjs";
import {users} from "./users.data";
import {AsyncPipe} from "@angular/common";
import {UserService} from "./user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  userService = inject(UserService)
}
