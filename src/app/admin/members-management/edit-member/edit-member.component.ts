import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Member} from "../../../members/model";

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {

  @Input() member!: Member
  validateForm: FormGroup = new FormGroup({
    email: new FormControl(),
    enterDate: new FormControl(),
    exitDate: new FormControl(),
    id: new FormControl(),
    idSocialMedia: new FormControl(),
    lastName: new FormControl(),
    memberCarId: new FormControl(),
    memberName: new FormControl(),
    taxEndDate: new FormControl(),
    taxPaid: new FormControl(),
    taxStartDate: new FormControl(),
  })

  constructor() {
  }

  ngOnInit(): void {
    this.validateForm.patchValue(this.member)
  }

}
