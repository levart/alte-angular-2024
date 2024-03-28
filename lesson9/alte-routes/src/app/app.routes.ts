import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {UsersComponent} from "./users/users.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UsersLayoutComponent} from "./users-layout/users-layout.component";
import {AuthGuardFN} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path:'main',
    component: MainComponent
  },
  // {
  //   path: 'users',
  //   component: UsersComponent
  // },
  // {
  //   path: 'users/:id',
  //   component: UserDetailComponent
  // }
  {
    path: 'users',
    canActivate: [AuthGuardFN],
    component: UsersLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/users/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UsersComponent,
      },
      {
        path: ':userId',
        component: UserDetailComponent
      },
      {
        path: ':userId/:activeTab',
        component: UserDetailComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];
