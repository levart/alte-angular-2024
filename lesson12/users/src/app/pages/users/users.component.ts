import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userService = inject(UserService);

  users$ = this.userService.getUsers();

  view(id: number) {
    console.log(`View user ${id}`);
  }

  edit(id: number) {
    console.log(`Edit user ${id}`);
  }

  delete(id: string) {
    console.log(`Delete user ${id}`);
    this.userService.deleteUser(id)
      .subscribe((res) => {
        console.log(res);
      this.users$ = this.userService.getUsers();
    });
  }
}
