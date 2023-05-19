import { Component } from '@angular/core';
import { LoginAuthenticatorService } from './services/auth/login-authenticator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {  
  title = 'infusionTestFrontEnd';
  userIsSignedIn = this.loginAuthServ.isUserSignedIn()
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.userIsSignedIn = this.loginAuthServ.isUserSignedIn();
      }
    })
  }
  constructor(private loginAuthServ: LoginAuthenticatorService, private router: Router) {    
    
  }  
  logOut() {
    this.loginAuthServ.signOutUser();
    this.router.navigateByUrl('/sign-in');
  }
}
