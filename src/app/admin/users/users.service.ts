import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "./model";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<UserInterface []>(`${environment.apiUrl}/users`).toPromise()
  }

  save(user: FormGroup) {
    return this.http.post(`${environment.apiUrl}/users/save`, user).toPromise()
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/delete`, {body: id}).toPromise()
  }

  getId(id: number) {
    return this.http.get(`${environment.apiUrl}/users/detail/${id}`).toPromise()
  }

}
