import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserRegistration} from './model';
import {RegisterService} from './register.service';
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm!: FormGroup;
  loading =  false

  constructor(private fb: FormBuilder, private registrationService: RegisterService, private modalRef: NzModalRef) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  async register(user: FormGroup) {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.loading = true
    await this.registrationService.register({
      name: user.value.name,
      password: user.value.password,
      email: user.value.email
    })
    this.loading = false
    this.modalRef.close()
  }

}
