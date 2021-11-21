import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Event} from "../model";
import {NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() event!: Event

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    location: new FormControl(),
    date: new FormControl
  })

  constructor(private modalRef: NzModalRef) {
  }

  ngOnInit(): void {
    this.form.patchValue(this.event)
    console.log(this.event, 'Event')
  }


  closeModal() {
    this.modalRef.close()
  }

  saveEvent() {
    this.modalRef.close()
  }

}
