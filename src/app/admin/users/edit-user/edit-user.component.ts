import {Component, Input, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInterface} from "../model";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user!: UserInterface
  validateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    enabled: new FormControl(),
    password: new FormControl()
  });

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    console.log(this.user)
    this.validateForm.patchValue({
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      username: this.user.username,
      enabled: this.user.enabled,
      password: this.user.password
    })
  }

  async save(user: FormGroup) {
    await this.userService.save(user.value)
  }

}
