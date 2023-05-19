import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticatorService } from '../services/auth/user-authenticator.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthServ: UserAuthenticatorService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    let isSignedIn = this.userAuthServ.isUserSignedIn();
    if (isSignedIn) {
      return true;
    } else {
      this.router.navigateByUrl("/sign-in");
      return false;
    }
  }  
  canEdit(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate called');
    if(this.userAuthServ.isAdmin()) {
      return true;
    } else {
      this.router.navigateByUrl('/products');
      alert("unauthorized to edit products");
      return false;
    }
  } 
}
