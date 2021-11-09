import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  loading = false

  constructor(private fb: FormBuilder, private loginService: LoginService, private modalRef: NzModalRef, private modal: NzModalService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

  }

  async login(userLogin: FormGroup) {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.loading = true
    await this.loginService.login({
      email: userLogin.value.email,
      password: userLogin.value.password
    })
    this.loading = false
    this.modalRef.close()
  }

  openRegisterModal(){
    this.modal.create({
      nzTitle: 'Register',
      nzContent: RegisterComponent,
      nzFooter: null
    })
  }


}
