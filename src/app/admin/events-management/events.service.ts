import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "./model";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  apiUrl = 'http://localhost:8085/events'
  apiUrlSave = 'http://localhost:8085/events/save'
  apiUrlDelete = 'http://localhost:8085/events/delete'

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Event []>(this.apiUrl).toPromise()
  }

  save(params: FormGroup) {
    return this.http.post(this.apiUrlSave, params).toPromise()
  }

  delete(id: number) {
    return this.http.delete(this.apiUrlDelete, {body: id}).toPromise()
  }
}
