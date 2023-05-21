import { Component } from '@angular/core';
import { UserAuthenticatorService } from './services/auth/user-authenticator.service';
import { Router } from '@angular/router';

import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {  
  title = 'infusionTestFrontEnd';
  userIsSignedIn = this.userAuthServ.isUserSignedIn()
  userIsCustomer = !this.userAuthServ.isAdmin();
  numberOfItems = this.cart.getCartItemCount();

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.userIsSignedIn = this.userAuthServ.isUserSignedIn();
        this.userIsCustomer = !this.userAuthServ.isAdmin();
      }
    })
  }
  constructor(private userAuthServ: UserAuthenticatorService, private router: Router, private cart: CartService) {    
    this.cart.addedToCart.subscribe(numberOfItems => {      
      this.numberOfItems = this.cart.getCartItemCount();
    })
  }  
  logOut() {
    this.userAuthServ.signOutUser();
    this.router.navigateByUrl('/sign-in');
  }
}
