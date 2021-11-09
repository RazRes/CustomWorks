import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, Validators.required],
      city: [null, Validators.required],
      car: [null, Validators.required],
      memberFrom: [null, Validators.required],
      taxPaid: [true, Validators.required]
    })
  }

}
