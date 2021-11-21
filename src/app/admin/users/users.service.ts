import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddUser, UserInterface} from "./model";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8085/users'

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<UserInterface []>(this.apiUrl).toPromise()
  }

  save(user: FormGroup) {
    return this.http.post(`${this.apiUrl}/save`, user).toPromise()
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/delete`, {body: id}).toPromise()
  }

  getId(id: number) {
    return this.http.get(`${this.apiUrl}/detail/${id}`).toPromise()
  }
}
