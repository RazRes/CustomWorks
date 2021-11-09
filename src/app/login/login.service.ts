import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLogin} from "./model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:3000/login'

  constructor(private http: HttpClient) {
  }

  login(userLogin: UserLogin) {
    return this.http.post(this.apiUrl, userLogin).toPromise()
  }
}
