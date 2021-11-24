import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Event} from "../model";
import {NzModalRef} from "ng-zorro-antd/modal";
import {EventsService} from "../events.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  @Input() event!: Event

  form: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    location: new FormControl(),
    eventDate: new FormControl(),
    eventLink: new FormControl(),
    picture: new FormControl(),
    content: new FormControl()
  })

  constructor(private modalRef: NzModalRef, private eventService: EventsService) {
  }

  ngOnInit(): void {
    this.form.patchValue({
      id: this.event.id,
      name: this.event.name,
      location: this.event.location,
      eventDate: this.event.eventDate,
      eventLink: this.event.eventLink,
      picture: this.event.picture,
      content: this.event.content
    })
  }


  closeModal() {
    this.modalRef.close()
  }

  async saveEvent(form: FormGroup) {
    await this.eventService.save(form.value)
  }

}
