import {CanActivateFn, Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {inject} from "@angular/core";


export const AuthGuardFN: CanActivateFn = (next, state) => {
  console.log('AuhtGuard#canActivate called');

  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/main']);
}
