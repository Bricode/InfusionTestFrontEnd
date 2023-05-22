import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { UserAuthenticatorService } from 'src/app/services/auth/user-authenticator.service';
import { User } from 'src/app/interfaces/user';
import * as CryptoJs from 'crypto-js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private userService: UserAuthenticatorService, private formBuilder: FormBuilder, private router: Router ) {

  }

  signInForm = this.formBuilder.group({
    username: '',
    password: ''
  });


  onSubmit(): void {
    var enteredUsername = this.signInForm.value.username;
    var enteredPassword = this.signInForm.value.password;
    

    this.userService.login(enteredUsername, enteredPassword).subscribe(res =>{
      var success = false;    
      var iv  = CryptoJs.enc.Base64.parse("1234567890123456");  
      const user = res.find((a:any) => {      
        var cipherParams = CryptoJs.lib.CipherParams.create({
          ciphertext: CryptoJs.enc.Base64.parse(a.hash.cipherText),
          iv: CryptoJs.enc.Hex.parse(a.hash.iv),
          salt: CryptoJs.enc.Hex.parse(a.hash.salt)});
         var bytes = CryptoJs.AES.decrypt(cipherParams, "1234567890123456", {iv: iv});
         console.log(bytes.toString(CryptoJs.enc.Utf8));        
        if (CryptoJs.AES.decrypt(cipherParams, "1234567890123456").toString(CryptoJs.enc.Utf8) == enteredUsername +""+ enteredPassword) {
          success = true; 
          return a;       
        }
      })
      if (success) {
        console.log("Signed in");
        this.userService.setSignedInUser(user);
        this.router.navigateByUrl('/products');
      } else {
        alert("Login failed");
      }     
    })    
  }
}
