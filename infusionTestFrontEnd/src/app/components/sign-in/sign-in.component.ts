import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginAuthenticatorService } from 'src/app/services/auth/login-authenticator.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private loginService: LoginAuthenticatorService, private formBuilder: FormBuilder, private router: Router ) {

  }

  signInForm = this.formBuilder.group({
    username: '',
    password: ''
  });


  onSubmit(): void {
    var enteredUsername = this.signInForm.value.username;
    var enteredPassword = this.signInForm.value.password;

    this.loginService.login(enteredUsername, enteredPassword).subscribe(res =>{
      const user = res.find((a:any) => {
        return a.username === enteredUsername && a.password === enteredPassword
      })
      if (user) {
        console.log("Signed in");
        this.router.navigateByUrl('/products');
      } else {
        alert("Login failed");
      }     
    })    
  }
}
