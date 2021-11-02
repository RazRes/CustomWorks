import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {ContactModel} from "./contact-model";

@Injectable({
  providedIn: 'root'
})
export class ContactUsServiceService {

  constructor(private http: HttpClient) {
  }

  sendMessage(form: ContactModel) {
    return this.http.post('sendMessage', form).toPromise()
  }
}
