import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {catchError, of, Subject, takeUntil, throwError} from "rxjs";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    RouterLink
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit, OnDestroy {
  userService = inject(UserService)

  subject$ = new Subject<any>()

  ngOnInit() {
    this.userService.users$
      .pipe(
        takeUntil(this.subject$),
        catchError( (error) => {
          console.log(error)
          return throwError(() => error)
        })
      )
      .subscribe((res) => {
        console.log(res)
      })
  }

  delete(id: number | undefined) {
    if (!id) return
    this.userService.delete(id)
  }

  createError() {
    this.userService.users.error('SOme error')
  }

  ngOnDestroy() {
    this.subject$.next(null)
    this.subject$.complete()
  }
}
