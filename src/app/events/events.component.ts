import {Component, OnInit} from '@angular/core';
import {Event} from "../admin/events-management/model";
import {EventsService} from "../admin/events-management/events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [
    {
      id: undefined,
      name: '',
      location: '',
      content: '',
      eventDate: '',
      eventLink: '',
      picture: ''
    }
  ]
  loading = false

  constructor(private eventService: EventsService) {
  }

  async ngOnInit() {
    this.loading = true
    this.events = await this.eventService.list().finally(() => this.loading = false)
  }

}
