import { Component } from '@angular/core';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {UserType} from "../app.component";

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [
    NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault
  ],
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.scss'
})
export class StructuralComponent {
  display = true;

  userType = UserType;

  users: {
    name: string,
    type?: UserType
  }[] = [
    {
      name: 'John',
      type: UserType.Admin
    },
    {
      name: 'Jane',
      type: UserType.User
    },
    {
      name: 'Joe',
      type: UserType.Guest
    },
    {
      name: 'Joe',
    }
  ];



  changeView() {
    this.display = !this.display;

  }
}
