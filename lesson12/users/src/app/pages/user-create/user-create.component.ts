import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {map, share, shareReplay, Subject, switchMap, takeUntil, tap} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent implements OnDestroy{
  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  form = new FormGroup({
    id: new FormControl<string | undefined | null>(null),
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  })

  user$ = this.route.params
    .pipe(
      map(params => params['id']),
      tap(id => console.log(id)),
      switchMap((id) => this.userService.getUser(id)
        .pipe(
          tap(user => {
            if (!user) return;
            this.form.patchValue(user);
          })
        )
      )
    );

  sub$ = new Subject();

  submit() {
    console.log(this.form.value);
    if (this.form.invalid) return;

    const {
      id,
      name,
      email
    } = this.form.value;

    if(id){
      this.userService.updateUser({
        id,
        name,
        email
      } as User)
        .pipe(
          takeUntil(this.sub$)
        )
        .subscribe((res) => {
          this.router.navigate(['/']);
        })
    } else {
      const randomId = Math.floor(Math.random() * 100000);
      const user = {
        id: String(randomId),
        name,
        email
      } as User;

      this.userService.createUser(user)
        .pipe(
          takeUntil(this.sub$)
        )
        .subscribe((res) => {
          this.router.navigate(['/']);
        })
    }
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
