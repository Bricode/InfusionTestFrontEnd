import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticatorService {

  constructor(private http: HttpClient) { }
  url = "http://localHost:3000/user";
  params = new HttpParams().set('username', 'customer1').set('password','customer');
  
  login() {
    return this.http.get<any>(this.url, {params: this.params});      
  }
}
