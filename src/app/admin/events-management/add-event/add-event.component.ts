import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalRef} from "ng-zorro-antd/modal";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private modalRef: NzModalRef, private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      location: [null, Validators.required],
      eventDate: [null, Validators.required],
      content: [null, Validators.required],
      eventLink: [null, Validators.required],
      picture: [null, Validators.required]
    })
  }

  closeModal() {
    this.modalRef.close()
  }

  async saveEvent(form: FormGroup) {
    await this.eventService.save(form.value)
    this.modalRef.close()
  }
}
