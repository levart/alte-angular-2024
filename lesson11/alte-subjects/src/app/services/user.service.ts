import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, reduce, Subject} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  users$: Observable<User[]> = this.users.asObservable()

  get usersData() {
    return this.users.getValue()
  }

  addUser(user: User): Observable<User> {
    const randomId = Math.round(Math.random() * 10000)
    user.id = randomId

    let users = this.usersData;
    users.push(user);
    this.users.next(users);

    return of(user)


  }

  editUser(user: User) {

    const findUser = this.usersData.find( f => f.id === user.id)

    if (!findUser) {
      throw Error('user not found')
    }

    findUser.name = user.name;
    findUser.email = user.email

    const findIndex = this.usersData.findIndex( (value) => value.id === user.id)

    const users = [
      ...this.usersData.slice(0, findIndex),
      findUser,
      ...this.usersData.slice(findIndex + 1, this.usersData.length)
    ]

    this.users.next(users)

    return of(findUser)
  }

  getById(userId: number): Observable<User | undefined> {
    console.log(userId)
    console.log(this.usersData)
    return of(this.usersData.find( f => f.id === userId))
  }

  delete(userId: number) {
    const users = this.usersData.filter((f) => f.id !== userId)
    this.users.next(users)
  }
}
