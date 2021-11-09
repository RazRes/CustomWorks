import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showMembers = true
  showEvents = false
  showVideos = false

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  showMembersMenu() {
  }

  showEventsMenu() {
  }

  showVideosMenu() {
  }

}
