import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "./model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MembersService {


  constructor(private http: HttpClient) {
  }

  getMembers() {
    return this.http.get<Member []>(`${environment.apiUrl}/members`).toPromise()
  }

}
