import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactUsServiceService} from "./contact-us-service.service";
import {NzModalRef} from "ng-zorro-antd/modal";
import {ContactModel} from "./contact-model";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup
  constructor(private fb:FormBuilder, private service: ContactUsServiceService, private modal: NzModalRef ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.maxLength(100)]]
    });
  }

  async sendMessage(form: ContactModel){
    await this.service.sendMessage(form)
    this.modal.close()
  }

}
