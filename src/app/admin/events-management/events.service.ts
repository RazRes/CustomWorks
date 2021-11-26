import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "./model";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventsService {



  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Event []>(`${environment.apiUrl}/events`).toPromise()
  }

  save(params: FormGroup) {
    return this.http.post(`${environment.apiUrl}/events/save`, params).toPromise()
  }

  delete(id: number | undefined) {
    return this.http.delete(`${environment.apiUrl}/events/delete`, {body: id}).toPromise()
  }
}
