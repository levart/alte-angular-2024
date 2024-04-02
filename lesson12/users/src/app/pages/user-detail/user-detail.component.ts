import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user";
import {map, Observable, switchMap, tap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent{

  route = inject(ActivatedRoute);
  userService = inject(UserService);

  user$: Observable<User> = this.route.params
    .pipe(
      map(params => params['id']),
      tap(id => console.log(id)),
      switchMap(id => this.userService.getUser(id))
    )


}
