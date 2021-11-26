import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  validateForm!: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, Validators.required],
      lastName: [null, Validators.required],
      memberName: [null, Validators.required],
      taxEndDate: [null, Validators.required],
      taxPaid: [null, Validators.required],
      taxStartDate: [null, Validators.required],
    })
  }

}
