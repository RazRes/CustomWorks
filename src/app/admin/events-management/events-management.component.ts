import {Component, OnInit} from '@angular/core';
import {Event} from "./model";
import {NzModalService} from "ng-zorro-antd/modal";
import {AddEventComponent} from "./add-event/add-event.component";
import {UserInterface} from "../users/model";
import {EditUserComponent} from "../users/edit-user/edit-user.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {EventsService} from "./events.service";

@Component({
  selector: 'app-events-management',
  templateUrl: './events-management.component.html',
  styleUrls: ['./events-management.component.css']
})
export class EventsManagementComponent implements OnInit {

  events: Event [] = []
  loading = false

  constructor(private modal: NzModalService, private eventService: EventsService) {
  }

  async ngOnInit() {
    this.loading = true
    this.events = await this.eventService.list().finally(() => this.loading = false)
  }

  addEvent() {
    this.modal.create({
      nzTitle: 'Add event',
      nzContent: AddEventComponent,
      nzFooter: null
    })
  }

  editEvent(event: Event) {
    this.modal.create({
      nzTitle: 'Edit user',
      nzContent: EditEventComponent,
      nzComponentParams: {
        event
      },
      nzFooter: null
    })
    console.log(event)
  }

  async deleteEvent(id: number) {
    // this.events.splice(index, 1)
    // this.events = [...this.events]
    await this.eventService.delete(id)
  }

}
