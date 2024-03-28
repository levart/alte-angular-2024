import { Injectable } from '@angular/core';
import {map, of} from "rxjs";
import {users} from "./users.data";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = of(users)
    .pipe(
      map(users => users.filter(user => user.id % 2 === 0))
    )
}
