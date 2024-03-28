import { Routes } from '@angular/router';
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {UserCreateComponent} from "./pages/user-create/user-create.component";

export const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'create/:id',
    component: UserCreateComponent
  },
];
