import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticatorService {
    user: User = {} as User;
    constructor(private http: HttpClient) { }
    url = "http://localHost:3000/user";
  
  
  login(username: any , password: any) {
    var params = new HttpParams().set('username', username).set('password',password);
    return this.http.get<any>(this.url, {params: params});      
  }

  isUserSignedIn() {
    return Object.keys(this.user).length >= 1;
  }

  setSignedInUser(user: User) {
    this.user = user;
  }

  signOutUser() {
    this.user = {} as User;
  }
}
