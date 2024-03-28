import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
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
export class UserCreateComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl<number | undefined>(undefined),
    name: new FormControl<string | undefined>('', Validators.required),
    email: new FormControl<string | undefined>('', [Validators.required, Validators.email])
  })

  userService: UserService = inject(UserService)

  router: Router = inject(Router)
  route: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    const userId = +this.route.snapshot.params['id']
    if (userId) {
      this.form.get('id')?.setValue(userId)
      this.userService.getById(userId).subscribe(user => {
        console.log(user)
        this.form.patchValue({
          name: user?.name,
          email: user?.email
        })
      })
    }

  }

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    const {id, name, email} = this.form.value as User;

    if (id) {
      this.userService.editUser({
        id,
        name,
        email
      }).subscribe((res) => {
        console.log(res)
        this.router.navigate(['/']).then()
      })
    } else {
      this.userService.addUser({
        name,
        email
      }).subscribe((res) => {
        console.log(res)
        this.router.navigate(['/']).then()
      })
    }


  }
}
