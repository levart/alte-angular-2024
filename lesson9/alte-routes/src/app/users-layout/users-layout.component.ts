import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-users-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.scss'
})
export class UsersLayoutComponent {
  router = inject(Router)
  route = inject(ActivatedRoute)

  pagination(page: number) {
    this.router.navigate(['/users','list'], {
      queryParams: {
        ...this.route.snapshot.queryParams,
        page: page,
      },
      fragment: 'loading'
    }).then(() => {
      console.log('Route changed');
    })

    // this.router.navigateByUrl(`/users/list?page=${page}&pageSize=10#loading`)
  }
}
