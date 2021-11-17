import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users.service";
import {AddUser, UserInterface} from "../model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      enabled: [false, Validators.required],
    })
  }

  async save(form: FormGroup) {
    await this.userService.save(form.value)
  }


}
