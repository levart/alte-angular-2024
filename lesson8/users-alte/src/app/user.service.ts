import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  get allUsers() {
    return this.users;
  }

  get userCount() {
    return this.users.length;
  }

  addUser(user: User) {
    console.log('User added');
    this.users.push(user);
  }
}
