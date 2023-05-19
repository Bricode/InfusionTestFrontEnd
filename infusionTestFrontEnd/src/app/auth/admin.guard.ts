import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticatorService } from '../services/auth/user-authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {  
  constructor(private userAuthServ: UserAuthenticatorService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {      
        if(this.userAuthServ.isAdmin()) {
          return true;
        } else {
          this.router.navigateByUrl('/products');
          alert("unauthorized to edit products");
          return false;
        }
      } 
  }
  

