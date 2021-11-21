import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private modalRef: NzModalRef) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      location: [null, Validators.required],
      date: [null, Validators.required]
    })
  }

  closeModal(){
    this.modalRef.close()
  }

  saveEvent(){
    this.modalRef.close()
  }
}
