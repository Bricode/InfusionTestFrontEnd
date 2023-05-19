import { Component } from '@angular/core';
import { UserAuthenticatorService } from './services/auth/user-authenticator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {  
  title = 'infusionTestFrontEnd';
  userIsSignedIn = this.userAuthServ.isUserSignedIn()
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.userIsSignedIn = this.userAuthServ.isUserSignedIn();
      }
    })
  }
  constructor(private userAuthServ: UserAuthenticatorService, private router: Router) {    
    
  }  
  logOut() {
    this.userAuthServ.signOutUser();
    this.router.navigateByUrl('/sign-in');
  }
}
