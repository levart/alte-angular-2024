import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  route = inject(ActivatedRoute)
  router = inject(Router)

  userId: number | undefined;

  users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
  ];

  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log('UserDetailComponent',params);
    console.log(typeof params['userId'])

    console.log('userId',this.userId);
    console.log(typeof this.userId)

    this.route.params.subscribe(params => {
      console.log('params.subscribe', params);
      this.userId = +params['userId'];
    });

  }

  changeRoute(id: number) {
    this.router.navigate(['/users', id]).then(() => {
      console.log('Route changed');
    })
  }
}
