import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lessontask5';

  users: User[] = []
}
