import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserRegistration} from "./model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl = 'http://localhost:3000/register'
  constructor(private http: HttpClient) { }

  register(params: UserRegistration){
    return this.http.post(this.apiUrl,params).toPromise()
  }
}
