import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  route = inject(ActivatedRoute)


  users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
  ];

  ngOnInit() {
    const params = this.route.snapshot.params;
    console.log('UsersComponent', params);

    const queryParams = this.route.snapshot.queryParams;
    console.log('UsersComponent queryParams', queryParams);

    const fragment = this.route.snapshot.fragment;
    console.log('UsersComponent fragment', fragment);

    this.route.queryParams.subscribe(params => {
      console.log('UsersComponent queryParams', params);
      console.log('UsersComponent queryParams page', params['page']);
      console.log('UsersComponent queryParams page', params['pageSize']);
    });

    this.route.fragment.subscribe(fragment => {
      console.log('UsersComponent fragment', fragment);
    });

  }


}
