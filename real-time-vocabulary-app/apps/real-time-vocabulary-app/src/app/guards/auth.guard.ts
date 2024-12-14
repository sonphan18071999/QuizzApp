import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authorization/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public authService = inject(AuthService);

  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    // this.authService.currentUser
    const token = localStorage.getItem('authToken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
