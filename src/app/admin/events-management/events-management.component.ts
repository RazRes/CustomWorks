import {Component, OnInit} from '@angular/core';
import {Event} from "./model";
import {NzModalService} from "ng-zorro-antd/modal";
import {AddEventComponent} from "./add-event/add-event.component";
import {UserInterface} from "../users/model";
import {EditUserComponent} from "../users/edit-user/edit-user.component";
import {EditEventComponent} from "./edit-event/edit-event.component";

@Component({
  selector: 'app-events-management',
  templateUrl: './events-management.component.html',
  styleUrls: ['./events-management.component.css']
})
export class EventsManagementComponent implements OnInit {

  events: Event [] = [
    {
      date: '2022-01-02',
      name: 'Euro meeting',
      location: 'Bucharest'
    },
    {
      date: '2022-01-02',
      name: 'Euro meeting',
      location: 'Bucharest'
    },
    {
      date: '2022-01-02',
      name: 'Euro meeting',
      location: 'Bucharest'
    }
  ]

  constructor(private modal: NzModalService) {
  }

  ngOnInit(): void {
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

  deleteEvent(index: number) {
    this.events.splice(index, 1)
    this.events = [...this.events]
  }

}
