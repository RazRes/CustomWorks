import {Component, OnInit} from '@angular/core';
import {VideoManagement} from "./model";

@Component({
  selector: 'app-video-management',
  templateUrl: './video-management.component.html',
  styleUrls: ['./video-management.component.css']
})
export class VideoManagementComponent implements OnInit {

  videoList: VideoManagement [] = [
    {
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    },
    {
      link: 'https://www.youtube.com/embed/_YAMZ59y8yM',
      title: 'Eurocar RoofTop'
    }]
  loading = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
