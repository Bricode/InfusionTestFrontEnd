import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatorService {
    user: User = {} as User;
    constructor(private http: HttpClient) { }
    url = "http://localHost:3000/user";
  
  
  login(username: any) {    
    var params = new HttpParams().set('username', username);
    return this.http.get<any>(this.url, {params: params});      
  }

  isUserSignedIn() {
    return Object.keys(this.user).length >= 1;
  }

  setSignedInUser(user: User) {
    this.user = user;
  }

  isAdmin() {
    return this.user.accountType == "admin"
  }

  signOutUser() {
    this.user = {} as User;
  }
}
