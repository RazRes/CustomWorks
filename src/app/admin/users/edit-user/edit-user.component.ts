import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserInterface} from "../model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  @Input() user!: UserInterface
  validateForm: FormGroup = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
    car: new FormControl(),
    memberFrom: new FormControl(),
    taxPaid: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
    this.validateForm.patchValue(this.user)
  }

}
