import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthenticatorService } from '../services/auth/login-authenticator.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginAuthServ: LoginAuthenticatorService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    let isSignedIn = this.loginAuthServ.isUserSignedIn();
    if (isSignedIn) {
      return true;
    } else {
      this.router.navigateByUrl("/sign-in");
      return false;
    }
  }  
}
