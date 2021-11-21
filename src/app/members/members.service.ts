import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "./model";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiUrl = 'http://localhost:8085/members'

  constructor(private http: HttpClient) { }

  getMembers(){
    return this.http.get<Member>(this.apiUrl).toPromise()
  }

  login(param: { username: string; password: string; }){
    return this.http.post(this.apiUrl, {param}).toPromise()
  }
}
