import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alte-routes';

  authService = inject(AuthService);

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
